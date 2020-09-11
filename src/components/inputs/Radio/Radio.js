import React from 'react';
import PropTypes from 'prop-types'
import UIRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Radio = ({label, value, checked, onChange}) => <FormControlLabel value={value}
                                                             onChange={onChange}
                                                             control={<UIRadio />}
                                                             label={label}
                                                             checked={checked} />

Radio.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  onChange: PropTypes.func
}


Radio.defaultProps = {
  checked: false
}
export default Radio
