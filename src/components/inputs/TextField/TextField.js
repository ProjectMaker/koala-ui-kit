import React from 'react'
import PropTypes from 'prop-types'
import { TextField as UITextField } from "@material-ui/core"

const TextField = ({errors, ...props}) => {
  return (
    <UITextField error={errors.length > 0} helperText={errors} {...props} size="small" margin="dense"  fullWidth />
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  errors: PropTypes.string
}

TextField.defaultProps = {
  errors: ''
}
export default TextField
