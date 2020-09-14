import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import View from './View'
import Form from '../../inputs/Form'
import FormControl from '../../inputs/FormControl'
import TextField from '../../inputs/TextField'
const PaletteForm = () => (
  <Box m={1}>
    <Form validate={() => true}>
      <Box display="flex">
        <FormControl name="color">
          <TextField label="Primary color" placeholder="#FFEEFF" />
        </FormControl>
        <Box alignSelf="center" ml={1}>
          <Button type="submit" variant="contained" color="primary">Apply</Button>
        </Box>
      </Box>
    </Form>
  </Box>
)
const PortalFront = () => {
  return (
    <Box>
      <PaletteForm />
      <View />
    </Box>
  )
}

export default PortalFront
