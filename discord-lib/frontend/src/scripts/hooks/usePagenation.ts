import { useState } from 'react'
import { toNumber, isNumber } from 'lodash'

type Props = {
  inputValue: string
}

export const usePagenation = (props: Props) => {
  const { inputValue } = props
  const [currentPage, setCurrentPage] = useState(1)
  const [cautionMessage, setCautionMessage] = useState('')

  const goInputPage = () => {
    const value = toNumber(inputValue)
    if (!isNumber(value)) {
      setCautionMessage('正しく入力してください。')
    }
    setCurrentPage(value)
  }

  return { currentPage, cautionMessage, goInputPage }
}
