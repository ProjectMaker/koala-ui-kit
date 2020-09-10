import React, { Fragment } from 'react'
import { TextField } from "@material-ui/core"
import { Field } from 'react-final-form'

import { InputError, isInputWithError } from '../../utils'

const TextInput = ({name, input, meta}) => {
  return (
    <Field name={name}>
      {({input, meta}) => {
        return (
          <Fragment>
            <TextField label={input.name} name={input.name} value={input.value}
                       onChange={input.onChange} placeholder={input.placeholder}
                       error={isInputWithError(meta)} helperText={InputError(meta)} />
          </Fragment>
        )
      }}
    </Field>
  )
}

export default TextInput
