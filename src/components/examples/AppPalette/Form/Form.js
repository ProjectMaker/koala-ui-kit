import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Form from '../../../inputs/Form'
import FormControl from '../../../inputs/FormControl'
import TextField from'../../../inputs/TextField'

const PaletteForm = ({onSubmit, initialValues}) => (
  <Box m={1}>
    <Form validate={() => true} onSubmit={onSubmit} initialValues={initialValues}>
      <Box display="flex">
        <FormControl name="primary">
          <TextField label="Primary color" placeholder="#FFEEFF" />
        </FormControl>
        <FormControl name="secondary">
          <TextField label="Secondary color" placeholder="#FFEEFF" />
        </FormControl>
        <Box alignSelf="center" ml={1}>
          <Button type="submit" variant="contained" color="primary">Apply</Button>
        </Box>
      </Box>
    </Form>
  </Box>
)

export default PaletteForm
