import type { NextPage } from 'next'
import { TodoInput } from '../components/TodoInput'
import { useState, ChangeEvent } from 'react'
import { TodoItem } from '../components/TodoItem'

type Todo = {
  id: number
  todo: string
}

const Home: NextPage = () => {
  const [task, setTask] = useState('')
  const onChangeTask = (e: ChangeEvent<HTMLInputElement>) =>
    setTask(e.target.value)

  const [todoId, setTodoId] = useState(0)
  const createTodo = () => {
    let id = todoId + 1
    setTodoId(id)
    const todo = {
      id: todoId,
      todo: task,
    }
    return todo
  }

  const [todos, setTodos] = useState<Todo[]>([])
  const onAddTodo = () => {
    const currentTodos = todos.slice()
    currentTodos.push(createTodo())
    setTodos(currentTodos)
    setTask('')
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput task={task} onChangeTask={onChangeTask} />
      <button onClick={onAddTodo}>追加</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} task={todo.todo} />
        ))}
      </ul>
    </div>
  )
}

export default Home
