import instance from './axios'
import { Task, Tag } from '../@types/types.d'

/*
 * Get Tasks
 */
export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const { data } = await instance.get<Task[]>('tasks/')
    return data
  } catch (e) {
    throw e
  }
}

/*
 * Get Tags
 */
export const fetchTags = async (): Promise<Tag[]> => {
  try {
    const { data } = await instance.get<Tag[]>('tags/')
    return data
  } catch (e) {
    throw e
  }
}
