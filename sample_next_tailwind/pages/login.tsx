import type { NextPage } from 'next'
import { useState, ChangeEvent, useCallback, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'

const Login: NextPage = () => {
  const [userId, setUserId] = useState('')
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)

  const { login } = useAuth()
  const onClickLogin = () => {
    login(userId)
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-orange-100 w-[400px] rounded-md shadow-current px-6 py-4'>
        <h1 className='text-2xl text-indigo-500 mb-2'>ユーザー管理アプリ</h1>
        <hr />
        <div className='flex flex-col mt-6 w-2/3 mx-auto'>
          <label htmlFor='userId' className=''>
            ユーザーID
          </label>
          <input
            type='text'
            id='userId'
            value={userId}
            onChange={onChangeUserId}
            className='rounded-md border border-indigo-500 focus:border-indigo-900 mt-2'
          />
        </div>
        <button
          onClick={onClickLogin}
          className='border bg-indigo-300 hover:bg-indigo-100 rounded-md mt-4 block mx-auto px-4 py-2'>
          ログイン
        </button>
      </div>
    </div>
  )
}

export default Login
