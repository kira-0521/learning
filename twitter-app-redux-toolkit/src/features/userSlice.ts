import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { User } from '../@types/user'

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
  },
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user.userState

export default userSlice.reducer
