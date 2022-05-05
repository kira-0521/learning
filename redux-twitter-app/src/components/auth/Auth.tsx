import React, { useState, ChangeEvent } from 'react'
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
import styles from './auth.module.css'

export const Auth = () => {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)
  const onClickGoogleLogin = async () => {
    await signInGoogle()
  }

  const onClickToggleIsLogin = () => setIsLogin(!isLogin)

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
            {isLogin ? 'Sign in' : 'Register'}
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
            <Grid container>
              <Grid item xs>
                <span className={styles.login_reset}>Forgot password?</span>
              </Grid>
              <Grid item xs>
                <span
                  onClick={onClickToggleIsLogin}
                  className={styles.login_toggleMode}>
                  {isLogin ? 'Create new account?' : 'Back to Login'}
                </span>
              </Grid>
            </Grid>
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
