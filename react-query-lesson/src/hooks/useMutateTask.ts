import { useQueryClient, useMutation } from 'react-query'

import { useAppDispatch } from '../app/hooks'
import { resetEditedTask } from '../slices/todoSlice'
import { fetchCreateTask, fetchUpdateTask, fetchDeleteTask } from '../lib/api'
import { Task } from '../@types/types.d'

export const useMutateTask = () => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  const createTaskMutation = useMutation(fetchCreateTask, {
    onSuccess: (data) => {
      const previousTodos = queryClient.getQueryData<Task[]>('tasks')
      if (previousTodos) {
        queryClient.setQueryData<Task[]>('tasks', [...previousTodos, data])
      }
      dispatch(resetEditedTask())
    },
  })

  const updateTaskMutation = useMutation(fetchUpdateTask, {
    // variables: request時のparamsが入っている
    onSuccess: (data, variables) => {
      // * 既存のキャッシュを取得
      const previousTodos = queryClient.getQueryData<Task[]>('tasks')
      if (previousTodos) {
        // * キャッシュをセット
        queryClient.setQueryData<Task[]>(
          'tasks',
          previousTodos.map((task) => (task.id === variables.id ? data : task))
        )
      }
      dispatch(resetEditedTask())
    },
  })

  const deleteTaskMutation = useMutation(fetchDeleteTask, {
    onSuccess: (data, variables) => {
      const previousTodos = queryClient.getQueryData<Task[]>('tasks')
      if (previousTodos) {
        queryClient.setQueryData<Task[]>(
          'tasks',
          previousTodos.filter((task) => task.id !== variables)
        )
      }
      dispatch(resetEditedTask())
    },
  })

  return { createTaskMutation, updateTaskMutation, deleteTaskMutation }
}
