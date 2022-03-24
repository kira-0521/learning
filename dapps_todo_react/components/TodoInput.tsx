import { ChangeEvent, VFC } from 'react'

type Props = {
  onChangeTask: (e: ChangeEvent<HTMLInputElement>) => void
  task: string
}

export const TodoInput: VFC<Props> = (props) => {
  const { onChangeTask, task } = props

  return (
    <div>
      <div>
        <label htmlFor='title'>タイトル</label>
        <input
          type='text'
          id='title'
          value={task}
          onChange={(e) => onChangeTask(e)}
        />
      </div>
    </div>
  )
}
