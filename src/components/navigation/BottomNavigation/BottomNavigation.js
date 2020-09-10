import React from 'react'
import PropTypes from 'prop-types'
import UIBottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
const BottomNavigation = ({onChange, value, actions}) => {
  return (
    <UIBottomNavigation
      value={value}
      onChange={onChange}
      showLabels
    >
      {actions.map(action => <BottomNavigationAction label={action.label} />)}
    </UIBottomNavigation>
  );
}

BottomNavigation.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  actions: PropTypes.array.isRequired
}

BottomNavigation.defaultProps = {
  value: 0,
  onChange: (event, newValue) => {}
}

export default BottomNavigation
