import React, { Fragment } from "react";
import Box from '@material-ui/core/Box'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'

import Form  from './Form'
import Colors from './Colors'


export default () => {
  const [color, setColor] = React.useState({ primary: '#4d88ff', secondary: '#616161'})
  return (
    <Box>
      <Form onSubmit={(color) => setColor(color) } initialValues={{primary: color.primary, secondary: color.secondary}}/>
      <Box m={1}>
        <ThemeProvider theme={createMuiTheme({palette: { primary: { main: color.primary }, secondary: { main: color.secondary}}})}>
          <Colors />
        </ThemeProvider>
      </Box>
    </Box>
  )
}
