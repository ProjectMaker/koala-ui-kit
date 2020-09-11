import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form'

import { getErrorMessages } from '../../helpers/form-errors'

const FormControl = ({name, type, children}) => {
  return (
    <Field name={name} type={type}>
      {({input, meta}) => {
        return React.cloneElement(
          children,
          {
            ...input,
            errors: getErrorMessages(meta).join('<br/>')
          },
          null
        )
      }}
    </Field>
  )
}

FormControl.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.react.Node.isRequired,
  type: PropTypes.string
}

export default FormControl
