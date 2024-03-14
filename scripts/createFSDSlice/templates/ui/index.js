import fs from 'fs/promises'
import { resolveRoot }  from '../../helpers/resolveRoot'
import { firstCharUpperCase } from '../../helpers/firstCharUpperCase'
import { camalize } from '../../helpers/camalize'
import { componentTemplate } from './componentTemplate'
import { storyTemplate } from './storyTemplate'
import { stylesTemplate } from './stylesTemplate'

export const createUI = async (layer, sliceName) => {
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