import React from 'react'
import PropTypes from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

export const Form = ({onSubmit, validate, children}) => {
  return (
    <FinalForm onSubmit={onSubmit} validate={validate} >
      {props => (
        <form onSubmit={props.handleSubmit}>
          {children}
        </form>
      )}
    </FinalForm>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  validate: PropTypes.func.isRequired,
  children: PropTypes.React.node.isRequired
}

Form.defaultProps = {
  onSubmit: (e) => {},
  validate: (values) => {}
}
export default Form
