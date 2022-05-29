import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { Task } from '../../@types/types.d'
import { ChevronDoubleRightIcon } from '@heroicons/react/solid'

export const ReactQueryB = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData<Task[]>('tasks')

  return (
    <>
      <p className="font-bold my-3">ReactQueryA</p>
      {data ? (
        <>
          {'message' in data ? (
            <div>{'Error'}</div>
          ) : (
            data.map((task) => <p key={task.id}>{task.title}</p>)
          )}
        </>
      ) : (
        <div>{'Error'}</div>
      )}
      <ChevronDoubleRightIcon
        onClick={() => navigate('/')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}
