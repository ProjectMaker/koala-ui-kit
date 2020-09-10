import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export default () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2} fontFamily="Roboto">
          primary.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="secondary.main" color="secondary.contrastText" p={2} fontFamily="Roboto">
          secondary.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="error.main" color="error.contrastText" p={2} fontFamily="Roboto">
          error.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="warning.main" color="warning.contrastText" p={2} fontFamily="Roboto">
          warning.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="info.main" color="info.contrastText" p={2} fontFamily="Roboto">
          info.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="success.main" color="success.contrastText" p={2} fontFamily="Roboto">
          success.main
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="text.primary" color="background.paper" p={2} fontFamily="Roboto">
          text.primary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="text.secondary" color="background.paper" p={2} fontFamily="Roboto">
          text.secondary
        </Box>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Box bgcolor="text.disabled" color="background.paper" p={2} fontFamily="Roboto">
          text.disabled
        </Box>
      </Grid>
    </Grid>
  )
}
