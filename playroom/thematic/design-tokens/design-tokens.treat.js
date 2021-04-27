import { createTheme } from 'treat'
      import tokens from './es6.object.js'
      export const themes = {
        
            anzxdark: createTheme(tokens.themes.anzxdark, 'anzxdark'),
            defaultdark: createTheme(tokens.themes.defaultdark, 'defaultdark'),
            anzx: createTheme(tokens.themes.anzx, 'anzx'),
            default: createTheme(tokens.themes.default, 'default'),
            horizon: createTheme(tokens.themes.horizon, 'horizon'),
            product: createTheme(tokens.themes.product, 'product')
      }
    