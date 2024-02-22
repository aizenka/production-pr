const fs = require('fs/promises')
const resolveRoot = require('../../helpers/resolveRoot')
const reduxSliceTemplate = require('./reduxSliceTemplate')
const schemaTypeTemplate = require('./schemaTypeTemplate')
const firstCharUpperCase = require('../../helpers/firstCharUpperCase')

module.exports = async (layer, sliceName) => {
  const resolveModulePath = (...segments) => {
    return resolveRoot(
      'src',
      layer,
      sliceName,
      'model',
      ...segments
    )
  }

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModulePath())
      await fs.mkdir(resolveModulePath('selectors'))
      await fs.mkdir(resolveModulePath('services'))
      await fs.mkdir(resolveModulePath('slices'))
      await fs.mkdir(resolveModulePath('types'))
    } catch (e) {
      console.log(`[ERROR]: failed to create model segment for slice ${sliceName}`, e)
    }
  }

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModulePath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName)
      )
    } catch (e) {
      console.log(`[ERROR]: failed to create redux slice ${sliceName}`, e)
    }
  }

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModulePath('types', `${firstCharUpperCase(sliceName)}Schema.ts`),
        schemaTypeTemplate(sliceName)
      )
    } catch (e) {
      console.log('[ERROR]: failed to create state schema type\n', e)
    }
  }

  await createModelStructure()
  await createReduxSlice()
  await createSchemaType()
}