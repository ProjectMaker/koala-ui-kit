import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    paddingLeft: 0,
    paddingTop: 0
  }
})

export default (props) => {
  const classes = useStyles();
  return <CardHeader className={classes.root} {...props} />
}
