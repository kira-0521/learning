import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, ChangeEvent, useCallback, useEffect } from 'react'
import axios from 'axios'

import { Todo } from '../types/api/todo'

const Home: NextPage = () => {
  const [todoName, setTodoName] = useState('')
  const [todoContent, setTodoContent] = useState('')
  const [todos, setTodos] = useState<Array<Todo>>([])
  const onChangeTodoName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTodoName(e.target.value),
    []
  )
  const onChangeTodoContent = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setTodoContent(e.target.value),
    []
  )
  const getAllTodos = useCallback(async () => {
    const { data } = await axios.get<{ todos: Array<Todo> }>(
      'http://localhost:3000/api/todo'
    )
    setTodos(data.todos)
    return data.todos
  }, [])
  const onClickTodoCreate = useCallback(async () => {
    const todo = {
      name: todoName,
      content: todoContent,
    }
    await axios.post('http://localhost:3000/api/todo', todo)
    await getAllTodos()
  }, [todoName, todoContent, getAllTodos])

  useEffect(() => {
    getAllTodos()
  }, [getAllTodos])

  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main className='p-6 '>
        <h1 className='text-2xl text-current'>Todo一覧</h1>
        <hr />
        <ul>
          {todos.map((todo) => (
            <li key={todo.name}>
              <span>{todo.name}</span>
              <br />
              <span>{todo.content}</span>
            </li>
          ))}
        </ul>
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
              className='block w-64 h-32 mt-2 rounded-sm border border-indigo-600 text-sm text-slate-500 focus:bg-indigo-100'></textarea>
          </div>
          <div className='mt-4'>
            <button
              onClick={onClickTodoCreate}
              className='rounded-full bg-indigo-300 py-2 px-6 hover:cursor-pointer hover:bg-indigo-200'>
              Todo追加
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
