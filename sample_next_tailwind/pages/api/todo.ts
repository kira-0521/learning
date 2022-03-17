// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
  name: string
  content: string
  // isCompleted: boolean
  // created_at: string
  // update_at: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      // const todos = JSON.parse(localStorage.getItem('Todo')!)
      res.status(200).json({ todos: [{ name: 'todo', content: 'content' }] })
      break

    case 'POST':
      res.status(200).json({ name: 'POST', content: 'Todoの内容' })
      // const todo = req.body
      // localStorage.setItem('Todo', todo)
      break

    case 'PUT':
      res.status(200).json({ name: 'PUT', content: 'Todoの内容' })
      break

    case 'DELETE':
      res.status(200).json({ name: 'DELETE', content: 'Todoの内容' })
      break

    default:
      break
  }
}
