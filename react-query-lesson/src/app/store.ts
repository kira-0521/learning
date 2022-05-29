import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import todoReducer from '../slices/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
