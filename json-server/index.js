const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(jsonServer.defaults({ logger: false }))
server.use(jsonServer.bodyParser)

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800)
  })
  next()
})

server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users = [] } = db

    const userFromDB = users.find(
      (user) => user.username === username && user.password === password
    )

    if (userFromDB) {
      delete userFromDB.password
      return res.status(200).json(userFromDB)
    }

    return res.status(403).json({ message: 'User not found' })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e.message })
  }
})

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' })
  }

  next()
})

server.use(router)

server.listen(8080, () => {
  console.log('server is running on 8080 port')
})
