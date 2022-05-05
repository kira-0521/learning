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

import {
  signInGoogle,
  signInWithEmail,
  signUpWithEmail,
} from '../../lib/firebase/auth'
import { getImageUrl } from '../../lib/firebase/util'
import { getUniqueChar } from '../../lib/viewLogics/util'
import { validateEmailAndPassword } from '../../lib/viewLogics/validate'
import { updateUserProfile } from '../../features/userSlice'
import { useStyles } from './style'
import styles from './auth.module.css'
import { AlertToast } from '../parts/AlertToast'
import { useDiscloser } from '../../lib/hooks/useDiscloser'

export const Auth = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isOpen, showMessage, onClose, onOpen, setShowMessage } =
    useDiscloser()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [avatarImage, setAvatarImage] = useState<File | null>(null)
  const [isLogin, setIsLogin] = useState(true)

  const onChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    [email, setEmail]
  )
  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    [password, setPassword]
  )
  const onChangeUsername = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
    [username, setUsername]
  )

  const onChangeImageHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!isNil(e.target.files)) {
        setAvatarImage(e.target.files[0])
        // 同じファイルが選択された時にイベントが発火させるよう
        e.target.value = ''
      }
    },
    [avatarImage, setAvatarImage]
  )

  const onClickEmailLogin = useCallback(async () => {
    try {
      await signInWithEmail(email, password)
    } catch (err: unknown) {
      if (err instanceof Error) {
        setShowMessage(err.message)
        onOpen()
      }
    }
  }, [email, password, setEmail, setPassword])

  const onClickRegisterUser = useCallback(async () => {
    try {
      const authUser = await signUpWithEmail(email, password)

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
        setShowMessage(err.message)
        onOpen()
      }
    }
  }, [email, password, setEmail, setPassword])

  const onClickGoogleLogin = useCallback(async () => {
    await signInGoogle()
  }, [])

  const onClickToggleIsLogin = useCallback(
    () => setIsLogin(!isLogin),
    [isLogin, setIsLogin]
  )

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
                        onChange={onChangeImageHandler}
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
              fullWidth
              variant='contained'
              color='primary'
              onClick={isLogin ? onClickEmailLogin : onClickRegisterUser}
              disabled={
                isLogin
                  ? !validateEmailAndPassword(email, password)
                  : !validateEmailAndPassword(email, password) ||
                    isEmpty(username)
              }
              className={classes.submit}>
              {isLogin
                ? 'Sign In with Email and Password'
                : 'Register with Email and Password'}
            </Button>
            <Grid container>
              <Grid item xs>
                <span className={styles.login_reset}>Forgot password?</span>
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
      <AlertToast isOpen={isOpen} onClose={onClose} message={showMessage} />
    </Grid>
  )
}
