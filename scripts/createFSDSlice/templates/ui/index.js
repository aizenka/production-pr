const fs = require('fs/promises')
const resolveRoot = require('../../helpers/resolveRoot')
const firstCharUpperCase = require('../../helpers/firstCharUpperCase')
const camalize = require('../../helpers/camalize')
const componentTemplate = require('./componentTemplate')
const storyTemplate = require('./storyTemplate')
const stylesTemplate = require('./stylesTemplate')

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => {
    return resolveRoot(
      'src',
      layer,
      sliceName,
      'ui',
      ...segments
    )
  }

  const createUIDirectory = async () => {
    try {
      await fs.mkdir(resolveUIPath())
    } catch (e) {
      console.log('[ERROR]: failed to create UI directory\n', e)
    }
  }

  const createComponent = async () => {
    const componentName = firstCharUpperCase(sliceName)

    try {
      await fs.writeFile(
        resolveUIPath(`${componentName}.tsx`),
        componentTemplate(componentName, camalize(sliceName))
      )

      await fs.writeFile(
        resolveUIPath(`${componentName}.stories.tsx`),
        storyTemplate(layer, componentName)
      )

      await fs.writeFile(
        resolveUIPath(`${componentName}.module.scss`),
        stylesTemplate(camalize(sliceName))
      )
    } catch (e) {
      console.log('[ERROR]: failed to create component\n', e)
    }
  }

  await createUIDirectory()
  await createComponent()
}