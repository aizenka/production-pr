const firstCharUpperCase = require('../../helpers/firstCharUpperCase')

module.exports = (sliceName) => {
  const schemaName = `${firstCharUpperCase(sliceName)}Schema`

  return `import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ${schemaName} } from '../types/${schemaName}'

const initialState: ${schemaName} = {}

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  initialState,
  reducers: {
    template: (state, { payload }: PayloadAction<string>) => {}
  }
})

export const {
  actions: ${sliceName}Actions,
  reducer: ${sliceName}Reducer
} = ${sliceName}Slice
`
}