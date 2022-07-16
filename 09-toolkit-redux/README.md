# Redux Toolkit

### Snippet redux javascript

```
"Crear un slice de redux": {
    "scope": "javascript,typescript,typescriptreact",
    "prefix": "redux-slice",
    "body": [
      "import { createSlice } from '@reduxjs/toolkit';",
      "",
      "export const ${1:templates}Slice = createSlice({",
      "   name: '${1:name}',",
      "   initialState: {",
      "       counter: 10",
      "   },",
      "   reducers: {",
      "       increment: (state, /* action */ ) => {",
      "           state.counter += 1;",
      "       },",
      "   }",
      "});",
      "// Action creators are generated for each case reducer function",
      "export const { increment } = ${1:templates}Slice.actions;"
    ],
    "description": "Crear un slice de redux"
  }
```
