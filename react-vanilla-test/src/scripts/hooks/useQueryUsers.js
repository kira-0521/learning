import axios from 'axios'
import { useQuery } from 'react-query'
import { delay } from '../utils/delay'

const getUsers = async () => {
  const { data } = await axios
    .get('https://jsonplaceholder.typicode.com/users?_limit=3')
    .then(async () => await delay(3000))
  return data
}

export const useQueryUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
}
