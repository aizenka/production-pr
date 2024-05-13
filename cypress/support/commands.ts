import * as commonCommands from './commands/common'
import * as profileCommands from './commands/profile'
import * as articleDetailsCommands from './commands/articleDetails'
import * as commentCommands from './commands/comments'
import * as ratingCommands from './commands/rating'

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleDetailsCommands)
Cypress.Commands.addAll(commentCommands)
Cypress.Commands.addAll(ratingCommands)

// import { FIXTURE_MODE_API, FIXTURE_MODE_READ, FIXTURE_MODE_WRITE } from './constants'
// Cypress.Commands.overwrite('intercept', (req) => {
//   const FIXTURE_MODE = process.env.FIXTURE_MODE
//   const fixtureName = req.METHOD + req.url + hash(req.body)

//   if (FIXTURE_MODE === FIXTURE_MODE_READ) {
//     readFixture(fixtureName)
//   }

//   if (FIXTURE_MODE === FIXTURE_MODE_WRITE) {
//     createFixture(fixtureName, req.body)
//   }

//   if (FIXTURE_MODE === FIXTURE_MODE_API) {
//      for ci release regression
//   }
// })