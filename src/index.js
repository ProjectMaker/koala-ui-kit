import React from 'react'
import { Form as FinalForm } from 'react-final-form'
import TextInput from './components/text-input'
import Validator from './utils'

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

const EditForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <ul>
        <li>
          <TextInput name="firstname" />
        </li>
        <li>
          <TextInput name="lastname" />
        </li>
        <li><button type="submit">Submit</button></li>
      </ul>
    </form>
  )
}
export const Form = () => {
  return (
    <FinalForm onSubmit={(e) => console.log(e)} validate={validate} render={formProps => <EditForm {...formProps} />} />
  )
}


