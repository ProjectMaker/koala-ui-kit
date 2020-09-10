import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { default as UICheckbox } from '@material-ui/core/Checkbox'

const Checkbox = ({name, label, checked}) => {
  return (
    <FormControlLabel
      control={
        <UICheckbox
          checked={checked}
          onChange={() => {}}
          name={name}
        />
      }
      label={label}
    />
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
}

Checkbox.defaultProps = {
  onChange: () => {},
  checked: false
}
export default Checkbox
