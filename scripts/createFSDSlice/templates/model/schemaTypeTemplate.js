import { firstCharUpperCase } from '../../helpers/firstCharUpperCase'

export const schemaTypeTemplate = (sliceName) => {
  return `export interface ${firstCharUpperCase(sliceName)}Schema {}`
}