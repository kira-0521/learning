import { useQuery } from 'react-query'
import { fetchTags } from '../lib/api'
import { Tag } from '../@types/types.d'

export const useQueryTags = () => {
  return useQuery<Tag[] | Error>({
    queryKey: 'tags',
    queryFn: fetchTags,
    // react-queryでfetchを行なっているコンポーネントがアンマウントされた時、cacheを破棄するまでの時間
    // cacheTime: 30000,
    // fetchを行なってからどれだけデータをfreshとみなすか
    staleTime: 60000,
  })
}
