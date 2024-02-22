module.exports = (componentName, schemaName) => {
  return `export { ${componentName} } from './ui/${componentName}'
export { ${schemaName} } from './model/types/${schemaName}'
`
}