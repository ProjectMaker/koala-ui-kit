import React, { Fragment } from "react";
import { Form, Validator, FormControl, TextField, Checkbox } from 'koala-ui-kit'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button'

import CardHeader from './CardHeader';
import SubmitBar from './SubmitBar';

import View from './PortalFront/View'

const settingValidator = values => []

const validate = (values) => {
  return settingValidator(
    values
  )
}

const theme = createMuiTheme({
  typography: {
    fontSize: 13,
  },
  palette: {
    primary: {
      light: '#8ab7ff',
      main: '#4d88ff',
      dark: '#005ccb'
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#3737373',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#FFF',
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

export default () => (
  <ThemeProvider theme={theme}>
    <View/>
  </ThemeProvider>
)
