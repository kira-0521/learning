import { useQuery } from 'react-query'
import { fetchTasks } from '../lib/api'
import { Task } from '../@types/types.d'

export const useQueryTasks = () => {
  return useQuery<Task[] | Error>({
    queryKey: 'tasks',
    queryFn: fetchTasks,
    // cacheを破棄するまでの時間
    // cacheTime: 30000,
    // fetchを行なってからどれだけデータをfreshとみなすか
    staleTime: 0,
    // ポーリング
    // refetchInterval: 10000,
  })
}
