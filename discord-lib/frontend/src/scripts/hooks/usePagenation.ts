import { useState } from 'react'
import { toNumber, isNumber, isNaN } from 'lodash'

type Props = {
  inputValue: string
}

export const usePagenation = (props: Props) => {
  const { inputValue } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [cautionMessage, setCautionMessage] = useState('')

  const goInputPage = () => {
    const value = toNumber(inputValue)
    if (isNaN(value)) {
      setCautionMessage('正しく入力してください。')
    }
    setCurrentPage(value)
    setCautionMessage('')
  }

  return { currentPage, cautionMessage, goInputPage }
}
