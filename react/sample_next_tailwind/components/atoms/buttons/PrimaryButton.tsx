import { VFC, memo } from 'react'

type Props = {
  onClick: () => void
  isDisable: boolean
}

export const PrimaryButton: VFC<Props> = memo(function primaryButton(props) {
  const { onClick, isDisable } = props

  return (
    <button onClick={onClick} disabled={isDisable} className='btn'>
      ログイン
    </button>
  )
})
