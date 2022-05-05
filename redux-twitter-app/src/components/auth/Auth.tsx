import React from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { useStyles } from './style'
import { signInGoogle } from '../../lib/firebase/auth'

export const Auth = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const onClickGoogleLogin = async () => {
    await signInGoogle()
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={email}
              onChange={onChangeEmail}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={password}
              onChange={onChangePassword}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              {isLogin
                ? 'Sign In with Email and Password'
                : 'Register with Email and Password'}
            </Button>
            <Button
              onClick={onClickGoogleLogin}
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Sign In With Google
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
