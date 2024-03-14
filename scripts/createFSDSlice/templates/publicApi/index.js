import fs from 'fs/promises'
import { resolveRoot } from '../../helpers/resolveRoot'
import { firstCharUpperCase } from '../../helpers/firstCharUpperCase'
import { publicApiTemplate } from './publicApiTemplate'

export const createPublicAPI = async (layer, sliceName) => {
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