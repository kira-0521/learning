import { useQueryClient, useMutation } from 'react-query'

import { useAppDispatch } from '../app/hooks'
import { resetEditedTask } from '../slices/todoSlice'
import { fetchCreateTask } from '../lib/api'
import { Task } from '../@types/types.d'

export const useMutateTask = () => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  const craeteTaskMutation = useMutation(fetchCreateTask, {
    onSuccess: (data) => {
      const previousTodos = queryClient.getQueryData<Task[]>('task')
      if (previousTodos) {
        queryClient.setQueryData<Task[]>('task', [...previousTodos, data])
      }
      dispatch(resetEditedTask)
    },
  })
}
