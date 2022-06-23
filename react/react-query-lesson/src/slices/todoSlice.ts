import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../app/store'
import { EditTask, Tag } from '../@types/types'

/*
 * 初期値interface
 */
export interface TodoState {
  editedTask: EditTask
  editedTag: Tag
}

/*
 * 初期値
 */
const initialState: TodoState = {
  editedTask: {
    id: 0,
    title: '',
    tag: 0,
  },
  editedTag: {
    id: 0,
    name: '',
  },
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setEditedTask: (state, action: PayloadAction<EditTask>) => {
      state.editedTask = action.payload
    },
    resetEditedTask: (state) => {
      state.editedTask = initialState.editedTask
    },
    setEditedTag: (state, action: PayloadAction<Tag>) => {
      state.editedTag = action.payload
    },
    resetEditedTag: (state) => {
      state.editedTag = initialState.editedTag
    },
  },
})

export const { setEditedTask, resetEditedTask, setEditedTag, resetEditedTag } =
  todoSlice.actions

export const selectTask = (state: RootState) => state.todo.editedTask
export const selectTag = (state: RootState) => state.todo.editedTag

export default todoSlice.reducer
