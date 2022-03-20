import type { NextPage } from 'next'
import { useState, ChangeEvent } from 'react'
import { useAuth } from '../hooks/useAuth'
import { PrimaryButton } from '../components/atoms/buttons/PrimaryButton'

const Login: NextPage = () => {
  const [userId, setUserId] = useState('')
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value)

  const { login, loading } = useAuth()
  const onClickLogin = () => {
    login(userId)
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-accent w-[400px] rounded-md shadow-current px-6 py-4'>
        <h1 className='text-2xl text-neutral mb-2'>ユーザー管理アプリ</h1>
        <hr />
        <div className='form-control'>
          <label htmlFor='userId' className='label'>
            ユーザーID
          </label>
          <input
            type='text'
            id='userId'
            value={userId}
            onChange={onChangeUserId}
            className='input input-bordered'
          />
        </div>
        {loading ? (
          <button className='btn loading'>loading</button>
        ) : (
          <div className='text-center p-4'>
            <PrimaryButton onClick={onClickLogin} isDisable={loading} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
