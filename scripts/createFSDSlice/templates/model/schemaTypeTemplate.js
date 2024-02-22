const firstCharUpperCase = require('../../helpers/firstCharUpperCase')

module.exports = (sliceName) => {
  return `export interface ${firstCharUpperCase(sliceName)}Schema {}`
}