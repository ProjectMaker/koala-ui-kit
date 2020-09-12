import React, { Fragment } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { FormControl, TextField, Form} from "../../../inputs";
import SubmitBar from "../../SubmitBar";
const useStyles = makeStyles(theme => console.log(theme) || createStyles({
  main: {
    backgroundColor: theme.palette.secondary.main
  },
  root: {
    minHeight: '100vh',
    width: 520,
    backgroundColor: theme.palette.common.white
  },

  header: {
    overflow: 'hidden'
  },
  logo: {
    backgroundImage: "url(/_wifirst_default_logo.svg)",
    width: '50%',
    height: 70,
    margin: '0 auto 16px auto',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  body: {
    borderBottom: 1,

    '& a': {
      color: 'red'
    }
  },

  dividerText: {
    marginLeft: 30,
    marginRight: 30
  },
  bodyTitleLabel: {
    marginBottom: 20
  },
  bodyTitleDivider: {
    marginBottom: 40
  },
  footerDivider: {
    marginBottom: 20
  },
  footerInfoDivider: {
    marginLeft: 10,
    marginRight: 10
  }
}))

const FragmentDivider = () => {
  const classes = useStyles()
  return (
    <Box display="flex" alignItems="center" mt={6} mb={6}>
      <Box flexGrow={1}><Divider /></Box>
      <Box ml={4} mr={4}><Typography>OR</Typography></Box>
      <Box flexGrow={1}><Divider /></Box>
    </Box>
  )
}
const FreeWifi = () => {
  return (
    <Box>
      <Typography>Free WiFi</Typography>
      <Form validate={() => false}>
        <FormControl name="email">
          <TextField label="Email" placeholder="john@doe.org" variant="outlined"/>
        </FormControl>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary">Connect</Button>
        </Box>
      </Form>
    </Box>
  )
}

const ConnectionCode = () => {
  return (
    <Box>
      <Typography>Connection code</Typography>
      <Form validate={() => false}>
        <FormControl name="email">
          <TextField label="Connection code" placeholder="" variant="outlined"/>
        </FormControl>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Box>
            <Typography color="textSecondary">
              Already have an open session?
            </Typography>
            <Typography color="primary">
              Reconnect
            </Typography>
          </Box>
          <Button type="submit" variant="contained" color="primary">Validate</Button>
        </Box>
      </Form>
    </Box>
  )
}


const Header = () => {
  const classes = useStyles()
  return (
    <Box className={classes.header} mt={2}>
      <div className={classes.logo} />
    </Box>
  )
}

const BodyTitle = ({classes}) => (
  <Box textAlign="center">
    <Typography variant="h5" color="textSecondary" className={classes.bodyTitleLabel}>
      INTERNET ACCESS
    </Typography>
    <Divider  className={classes.bodyTitleDivider}/>
  </Box>
)



const Body = () => {
  const classes = useStyles()
  return (
    <Box flexGrow={1} display="flex" justifyContent="center" flexDirection="column" ml={4} mr={4}>
      <Box width={1} flexGrow={1}>
        <BodyTitle classes={classes}/>

        <FreeWifi />
        <FragmentDivider />
        <ConnectionCode />
      </Box>
    </Box>
  )
}

const FooterInto = ({classes}) => (
  <Box display="flex" justifyContent="center" mt={2}>
    <Typography color="textSecondary" variant="caption">Service provider by Wifirst</Typography>
    <Divider orientation="vertical" flexItem className={classes.footerInfoDivider}/>
    <Typography color="textSecondary" variant="caption">Legal notice</Typography>
    <Divider orientation="vertical" flexItem className={classes.footerInfoDivider}/>
    <Typography color="textSecondary" variant="caption">©Wifirst 2002 - 2020</Typography>
  </Box>
)
const Footer = ({classes}) => (
  <Box mb={2} textAlign="center" ml={2} mr={2}>
    <Typography variant="caption" color="textSecondary">
      WIFIRST prioritises the respect of your privacy and the protection of your personal data. WIFIRST is committed to comply with the General Data Protection Regulation (EU) 2016/679. WIFIRST only collects and processes personal data which are strictly needed for the provision of its services and needed for complying with its legal obligations. For more information on our commitments or to exercise your rights, please refer to our privacy policy
    </Typography>
    <FooterInto classes={classes} />
  </Box>
)

const View = ({theme}) => {
  const classes = useStyles({theme})
  return (
    <Box width={1} className={classes.main}>
      <Box display="flex" flexDirection="column" className={classes.root} mx="auto" boxShadow={1}>
        <Header/>
        <Body/>
        <Divider className={classes.footerDivider}/>
        <Footer classes={classes}/>
      </Box>
    </Box>
  )
}

export default withTheme(View)
