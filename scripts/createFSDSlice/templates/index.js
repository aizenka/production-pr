import fs from 'fs/promises'
import { resolveRoot } from '../helpers/resolveRoot'
import { createModel } from './model'
import { createUI } from './ui'
import { createPublicAPI } from'./publicApi'

export const createTemplate = async (layer, sliceName) => {
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