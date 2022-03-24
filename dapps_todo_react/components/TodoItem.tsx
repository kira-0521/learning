import { useState, ChangeEvent, VFC } from 'react'

type Props = {
  task: string
}

export const TodoItem: VFC<Props> = (props) => {
  const { task } = props

  return <li>{task}</li>
}
