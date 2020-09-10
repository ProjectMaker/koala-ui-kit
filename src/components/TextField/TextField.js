import React from 'react'
import { TextField as UITextField } from "@material-ui/core"

const TextField = (fieldProps) => {
  return (
    <UITextField {...fieldProps} />
  )
}

export default TextField
