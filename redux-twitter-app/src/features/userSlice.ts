import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { User, UserContent } from '../@types/user'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userState: {
      uid: '',
      photoUrl: '',
      displayName: '',
    },
  },
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.userState = action.payload
    },
    logout: (state) => {
      state.userState = {
        uid: '',
        photoUrl: '',
        displayName: '',
      }
    },
    updateUserProfile: (state, action: PayloadAction<UserContent>) => {
      state.userState.displayName = action.payload.displayName
      state.userState.photoUrl = action.payload.photoURL
    },
  },
})

export const { login, logout, updateUserProfile } = userSlice.actions

export const selectUser = (state: RootState) => state.user.userState

export default userSlice.reducer
