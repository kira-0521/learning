import axios from 'axios'
import { useQuery } from 'react-query'
import { delay } from '../utils/delay'

const getTasks = async () => {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
    .then(await delay(5000))
  return data
}

export const useQueryTasks = () => {
  return useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
    // ２秒間キャッシュを新しいデータとして見る
    // ２秒経つと再フェッチ
    staleTime: 2000,
  })
}
