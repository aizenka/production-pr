import path from 'path'
import fs from 'fs'

const pathForCacheFolder = path.resolve(__dirname, '..', 'node_modules', '.cache')
const pathForBuildFolder = path.resolve(__dirname, '..', 'build')

if (fs.existsSync(pathForCacheFolder)) {
  try {
    fs.rmSync(pathForCacheFolder, { recursive: true })
    console.log('directory "cache" deleted.')
  } catch (err) {
    console.log(`[ERROR]: error when deleting "cache" directory: ${err}`)
  }
}

if (fs.existsSync(pathForBuildFolder)) {
  try {
    fs.rmSync(pathForBuildFolder, { recursive: true })
    console.log('directory "build" deleted.')
  } catch (err) {
    console.log(`[ERROR]: error when deleting "build" directory: ${err}`)
  }
}
