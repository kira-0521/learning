import instance from './axios'
import { Task } from '../@types/types.d'

/*
  Get Tasks
*/
export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const { data } = await instance.get<Task[]>('tasks/')
    return data
  } catch (e) {
    throw e
  }
}
