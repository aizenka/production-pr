import { Project } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const LAYERS = ['app', 'entities', 'features', 'pages', 'shared', 'widgets']

const isAbsoulute = (value: string) => {
  return LAYERS.some(layer => value.startsWith(layer))
}

const files = project.getSourceFiles()

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations()

  importDeclarations.forEach(importDeclaration => {
    const value = importDeclaration.getModuleSpecifierValue()

    if (isAbsoulute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`)
    }
  })
})

project.save()