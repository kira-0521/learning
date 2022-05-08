import React, { useState, ChangeEvent, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { isNil, isString, isEmpty } from 'lodash'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

import { useStyles } from './style'
import styles from './auth.module.css'
import {
  signInGoogle,
  signInWithEmail,
  signUpWithEmail,
} from '../../lib/firebase/auth'
import { getImageUrl } from '../../lib/firebase/storage'
import { getUniqueChar } from '../../lib/viewLogics/util'
import { useResetPassword } from '../../lib/hooks/useResetPassword'
import { useMessage } from '../../lib/hooks/useMessage'
import { validateEmailAndPassword } from '../../lib/viewLogics/validate'
import { onChangeImageHandler } from '../../lib/viewLogics/form'
import { ResetEmailModal } from '../parts/ResetEmailModal'
import { AlertToast } from '../parts/AlertToast'
import { updateUserProfile } from '../../features/userSlice'

export const Auth = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { fetchResetPassword } = useResetPassword()
  const { onFloatAlert, showMessage, type, isToast, onCloseToast } =
    useMessage()

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
  })
  const [username, setUsername] = useState('')
  const [avatarImage, setAvatarImage] = useState<File | null>(null)
  const [isLogin, setIsLogin] = useState(true)
  const [isModal, setIsModal] = useState(false)
  const [resetEmail, setResetEmail] = useState('')

  const loginStateChangedHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setLoginState({ ...loginState, [e.target.name]: e.target.value })
    },
    [loginState, setLoginState]
  )
  const onChangeUsername = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    [username]
  )

  const onClickEmailLogin = useCallback(async () => {
    try {
      await signInWithEmail(loginState.email, loginState.password)
    } catch (err: unknown) {
      if (err instanceof Error) {
        onFloatAlert({ message: err.message, type: 'error' })
      }
    }
  }, [loginState.email, loginState.password, loginStateChangedHandler])

  const onClickRegisterUser = useCallback(async () => {
    try {
      const authUser = await signUpWithEmail(
        loginState.email,
        loginState.password
      )

      let url = ''
      if (!isNil(avatarImage)) {
        const randomChar = getUniqueChar()
        const fileName = `${randomChar}_${avatarImage.name}`
        url = await getImageUrl('avatars', fileName, avatarImage)
      }

      if (!isString(authUser) && !isNil(authUser) && !isNil(authUser.user)) {
        await authUser.user
          .updateProfile({
            displayName: username,
            photoURL: url,
          })
          .catch((err) => console.log(JSON.stringify(err)))
        dispatch(
          updateUserProfile({
            displayName: username,
            photoURL: url,
          })
        )
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        onFloatAlert({ message: err.message, type: 'error' })
      }
    }
  }, [loginState.email, loginState.password, loginStateChangedHandler])

  const onClickGoogleLogin = useCallback(async () => {
    await signInGoogle()
  }, [])

  const onClickToggleIsLogin = useCallback(
    () => setIsLogin(!isLogin),
    [isLogin, setIsLogin]
  )

  return (
    <>
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              {isLogin ? 'Sign in' : 'Register'}
            </Typography>
            <form className={classes.form} noValidate>
              {!isLogin && (
                <>
                  <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='username'
                    label='Username'
                    name='username'
                    autoComplete='username'
                    autoFocus
                    value={username}
                    onChange={onChangeUsername}
                  />
                  <Box textAlign='center'>
                    <IconButton>
                      <label>
                        <AccountCircleIcon
                          fontSize='large'
                          className={
                            avatarImage
                              ? styles.login_addIconLoaded
                              : styles.login_addIcon
                          }
                        />
                        <input
                          className={styles.login_hiddenIcon}
                          type='file'
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            onChangeImageHandler(e, setAvatarImage)
                          }
                        />
                      </label>
                    </IconButton>
                  </Box>
                </>
              )}
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
                value={loginState.email}
                onChange={loginStateChangedHandler}
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
                value={loginState.password}
                onChange={loginStateChangedHandler}
              />
              <Button
                fullWidth
                variant='contained'
                color='primary'
                onClick={isLogin ? onClickEmailLogin : onClickRegisterUser}
                disabled={
                  isLogin
                    ? !validateEmailAndPassword(
                        loginState.email,
                        loginState.password
                      )
                    : !validateEmailAndPassword(
                        loginState.email,
                        loginState.password
                      ) || isEmpty(username)
                }
                className={classes.submit}>
                {isLogin ? 'Sign In' : 'Register'}
              </Button>
              <Grid container>
                <Grid item xs>
                  <span
                    className={styles.login_reset}
                    onClick={useCallback(() => setIsModal(true), [isModal])}>
                    Forgot password?
                  </span>
                </Grid>
                <Grid item>
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
      <AlertToast
        isOpen={isToast}
        onClose={onCloseToast}
        message={showMessage}
        alertType={type}
      />
      <ResetEmailModal
        openModal={isModal}
        resetEmail={resetEmail}
        closeModal={useCallback(() => setIsModal(false), [isModal])}
        sendResetEmail={() => {
          fetchResetPassword({
            resetEmail,
            callback: () => {
              setResetEmail('')
            },
          })
        }}
        onChangeResetEmail={useCallback(
          (e: ChangeEvent<HTMLInputElement>) => setResetEmail(e.target.value),
          [resetEmail]
        )}
      />
    </>
  )
}
