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

/*
 * Create Task
 */
export const fetchCreateTask = async (
  task: Omit<Task, 'id'>
): Promise<Task> => {
  try {
    const { data } = await instance.post<Task>('tasks/', task)
    return data
  } catch (e) {
    throw e
  }
}
