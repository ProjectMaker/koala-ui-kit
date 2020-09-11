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
      light: '#8e8e8e',
      main: '#616161',
      dark: '#3737373',
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#5eb8ff',
      main: '#0288d1',
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
    <Form validate={validate} onSubmit={validate}>
      <div>
      <Card variant="outlined">
        <CardContent>
          <CardHeader title="Paramètres" />


            <FormControl name="firstname">
              <TextField label="Tag utilisateur" placeholder="ILOPEX" variant="outlined" />
            </FormControl>
            <br />
            <FormControl name="lastname">
              <TextField label="Url de redirection" placeholder="https://wwww.google.fr" variant="outlined" />
            </FormControl>
            <br />
            <FormControl name="debug" type="checkbox">
              <Checkbox label="Debug mode" />
            </FormControl>
            <br />
            <FormControl name="freshchat" type="checkbox">
              <Checkbox label="Freshchat" />
            </FormControl>
            <br />
            <FormControl name="free_ran" type="checkbox">
              <Checkbox label="RAN gratuit" />
            </FormControl>
            <br /><br />
            <Button variant="contained" color="secondary" type="submit">Submit</Button>
        </CardContent>
      </Card>
      <br /><br />
      <Card variant="outlined">
        <CardContent>
          <CardHeader title="Langues" />
            <FormGroup>
              {
                ["Francais","Anglais","Espagnol","Allemand","Chinois"].map(language => (
                  <FormControl name={language} type="checkbox" key={language}>
                    <Checkbox label={language} />
                  </FormControl>
                ))
              }
            </FormGroup>
        </CardContent>
      </Card>
        <SubmitBar>
          <Button variant="contained" color="secondary">Retour</Button>
          <Button variant="contained" color="secondary">Publier</Button>
        </SubmitBar>
    </div>
  </Form>
  </ThemeProvider>
)
