```jsx
import { Form, Validator, FormControl, TextField } from 'koala-ui-kit'
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
```
