import React from 'react'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 20,

    '& button': {
      marginRight: 10
    }
  }
})

export default ({children}) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>
}
