import { useState, useEffect } from 'react'

import { useStateContext } from '../context/StateProvider'
import { fetchTasks } from '../lib/api'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      if (isMounted) {
        setIsError(false)
        setIsLoading(true)
      }
      try {
        const res = await fetchTasks()
        isMounted && setTasks(res)
      } catch (e) {
        setIsError(true)
      } finally {
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
