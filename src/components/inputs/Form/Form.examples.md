```jsx
import { Form, Validator, FormControl, TextField, theme } from 'koala-ui-kit'
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button'

const settingValidator = values => (
  new Validator(values, {
    firstname: ['isRequired'],
    lastname: ['isRequired']
  }).getErrors()
)

const validate = (values) => {
  return settingValidator(
    values
  )
}
<ThemeProvider theme={theme}>
    <Form validate={validate} onSubmit={validate}>
      <div>
        <FormControl name="firstname">
          <TextField label="Firstname" placeholder="John" />
        </FormControl>
        <br />
        <FormControl name="lastname">
          <TextField label="Lastname" placeholder="Doe" />
        </FormControl>
        <br /><br />
        <Button color="primary" variant="outlined" type="submit">Submit</Button>
      </div>
    </Form>
</ThemeProvider>
```
