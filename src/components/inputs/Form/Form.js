import React from 'react'
import PropTypes from 'prop-types'
import { Form as FinalForm } from 'react-final-form'

export const Form = ({onSubmit, validate, children, initialValues}) => {
  console.log(initialValues)
  return (
    <FinalForm onSubmit={onSubmit} validate={validate} initialValues={initialValues} >
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
  children: PropTypes.React.node.isRequired,
  initialValues: PropTypes.object
}

Form.defaultProps = {
  onSubmit: (e) => {},
  validate: (values) => {},
  initialValues: {}
}
export default Form
