import React, { useState } from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  Modal,
  IconButton,
  Box,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import CameraIcon from '@material-ui/icons/Camera'
import EmailIcon from '@material-ui/icons/Email'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import styles from './auth.module.css'
import { useStyles } from './style'

export const Auth = () => {
  const classes = useStyles()

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
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
