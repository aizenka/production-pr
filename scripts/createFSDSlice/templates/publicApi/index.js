const fs = require('fs/promises')
const resolveRoot = require('../../helpers/resolveRoot')
const firstCharUpperCase = require('../../helpers/firstCharUpperCase')
const publicApiTemplate = require('./publicApiTemplate')

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName)
  const schemaName = `${firstCharUpperCase(sliceName)}Schema`

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      publicApiTemplate(componentName, schemaName)
    )
  } catch (e) {
    console.log('[ERROR]: failed to create PUBLIC API\n', e)
  }
}