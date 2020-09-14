import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
export {default as Grid} from '@material-ui/core/Grid';

export * from './components/inputs'
export * from './components/navigation'

export { default as AppPalette } from './components/examples/AppPalette'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#3737373',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#5eb8ff',
      main: '#0288d1',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#005b9f',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export { theme }
