import { FC, memo, FormEvent } from 'react'

import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setEditedTask, selectTask } from '../../slices/todoSlice'
import { useQueryTags } from '../../hooks/useQueryTags'
import { useMutateTask } from '../../hooks/useMutateTask'

const TaskEdit: FC = () => {
  const editedTask = useAppSelector(selectTask)
  const dispatch = useAppDispatch()

  const { status, data } = useQueryTags()
  const { createTaskMutation, updateTaskMutation } = useMutateTask()

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editedTask.id === 0) {
      const { id, ...newTask } = editedTask
      createTaskMutation.mutate(newTask)
    } else {
      updateTaskMutation.mutate(editedTask)
    }
  }

  console.log('rendered TaskEdit')
  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error') return <div>{'Error'}</div>
  if (updateTaskMutation.isLoading) {
    return <span>Updating...</span>
  }
  if (createTaskMutation.isLoading) {
    return <span>Creating...</span>
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="mb-3 px-3 py-2 border border-gray-300"
          placeholder="new task ?"
          type="text"
          onChange={(e) =>
            dispatch(setEditedTask({ ...editedTask, title: e.target.value }))
          }
          value={editedTask.title}
        />
        <button
          className="disabled:opacity-40 my-3 mx-3 py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
          disabled={!editedTask.title || !editedTask.tag}
        >
          {editedTask.id === 0 ? 'Create' : 'Update'}
        </button>
      </form>
    </div>
  )
}

export const TaskEditMemo = memo(TaskEdit)
