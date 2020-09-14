import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const types = ['light', 'main', 'dark']

export default () => {
  return (
    <Typography component="div" variant="body1">
      <Box m={1} color="text.disabled">disabled</Box>
      {types.map(type => (
        <Grid container spacing={1} key={type}>
          <Grid item xs={4}>
            <Box display="flex">
              <Box m={1} color={`error.${type}`}>error</Box>
              <Box m={1} color={`warning.${type}`}>warning</Box>
              <Box m={1} color={`info.${type}`}>info</Box>
              <Box m={1} color={`success.${type}`}>success</Box>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box color={`primary.${type}`} p={1}>primary</Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor={`primary.${type}`} color="primary.contrastText" p={1} flexGrow={1}>
              primary
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Box color={`secondary.${type}`} p={1}>secondary</Box>
          </Grid>
          <Grid item xs={3}>
            <Box bgcolor={`secondary.${type}`} color="secondary.contrastText" p={1} flexGrow={1}>
              secondary
            </Box>
          </Grid>
        </Grid>
      ))}
    </Typography>
  );
}
