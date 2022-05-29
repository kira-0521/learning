import { useState, useEffect } from 'react'

import { useStateContext } from '../context/StateProvider'
import { fetchTasks } from '../lib/api'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // Render 1
  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      if (isMounted) {
        setIsError(false)
        // Render 2
        setIsLoading(true)
      }
      try {
        const res = await fetchTasks()
        // Render 3
        isMounted && setTasks(res)
      } catch (e) {
        setIsError(true)
      } finally {
        // Render 4
        setIsLoading(false)
      }
    }
    fetchData()

    return () => {
      isMounted = false
    }
  }, [setTasks])
  return { tasks, isLoading, isError }
}
