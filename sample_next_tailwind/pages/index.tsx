import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, ChangeEvent } from 'react'

const Home: NextPage = () => {
  const [todoName, setTodoName] = useState('')
  const [todoContent, setTodoContent] = useState('')
  const onChangeTodoName = (e: ChangeEvent<HTMLInputElement>) =>
    setTodoName(e.target.value)
  const onChangeTodoContent = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setTodoContent(e.target.value)

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main className='p-6 '>
        <h1 className='text-2xl text-current'>Todo一覧</h1>
        <hr />
        <div className='mt-4'>
          <div>
            <label htmlFor='todoName'>タイトル</label>
            <input
              type='text'
              name='todoName'
              id='todoName'
              value={todoName}
              onChange={onChangeTodoName}
              className='block w-64 mt-2 rounded-sm border border-indigo-600 text-sm text-slate-500 focus:bg-indigo-100'
            />
          </div>
          <div className='mt-4'>
            <label htmlFor='todoContent'>内容</label>
            <textarea
              name='todoContent'
              id='todoContent'
              value={todoContent}
              onChange={onChangeTodoContent}
              className='block w-64 h-48 mt-2 rounded-sm border border-indigo-600 text-sm text-slate-500 focus:bg-indigo-100'></textarea>
            {todoContent}
          </div>
          <div className='mt-4'>
            <button className='rounded-full bg-indigo-300 py-2 px-6 hover:cursor-pointer hover:bg-indigo-200'>
              Todo追加
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
