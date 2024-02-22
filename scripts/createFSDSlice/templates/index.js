const fs = require('fs/promises')
const resolveRoot = require('../helpers/resolveRoot')
const createModel = require('./model')
const createUI = require('./ui')
const createPublicAPI = require('./publicApi')

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName))
  } catch (e) {
    console.log(`[ERROR]: failed to create directory for slice ${sliceName}`, e)
    return
  }

  await createModel(layer, sliceName)
  await createUI(layer, sliceName)
  await createPublicAPI(layer, sliceName)
}