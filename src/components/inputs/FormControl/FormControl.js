import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import { getErrorMessages } from '../../helpers/form-errors'

const FormControl = ({name, children}) => {
  return (
    <Field name={name}>
      {({input, meta}) => {
        return React.cloneElement(
          children,
          {
            ...input,
            errors: getErrorMessages(meta)
          },
          null
        )
      }}
    </Field>
  )
}

FormControl.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.react.Node.isRequired
}

export default FormControl
