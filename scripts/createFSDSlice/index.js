import { createTemplate } from './templates'

const resolvedLayers = ['features', 'entities', 'pages']

const layer = process.argv[2]
const sliceName = process.argv[3]


if (!layer || !resolvedLayers.includes(layer)) {
  throw new Error(`[ERROR]: specify one of the layers: ${resolvedLayers.join(' or ')}`)
}

if (!sliceName) {
  throw new Error('[ERROR]: specify slice name')
}

createTemplate(layer, sliceName)