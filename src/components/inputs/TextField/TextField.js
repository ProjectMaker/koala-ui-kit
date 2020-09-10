import React from 'react'
import PropTypes from 'prop-types'
import { TextField as UITextField } from "@material-ui/core"

const TextField = (fieldProps) => {
  return (
    <UITextField {...fieldProps} />
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  error: PropTypes.bool
}

TextField.defaultProps = {
  error: false
}
export default TextField
