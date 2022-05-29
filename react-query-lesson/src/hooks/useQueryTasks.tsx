import { useQuery } from 'react-query'
import { fetchTasks } from '../lib/api'
import { Task } from '../@types/types.d'

export const useQueryTasks = () => {
  return useQuery<Task[] | Error>({
    queryKey: 'tasks',
    queryFn: fetchTasks,
    cacheTime: 3000,
    staleTime: 3000,
  })
}
