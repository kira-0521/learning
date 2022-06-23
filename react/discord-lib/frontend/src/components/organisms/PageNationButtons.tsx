import { FC, ChangeEvent, KeyboardEvent } from 'react'
import { Input, Box } from '@chakra-ui/react'

type Props = {
  inputValue: string
  currentPage: number
  onChangeInputValue: (e: ChangeEvent<HTMLInputElement>) => void
  onEnterPress: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const PageNationButtons: FC<Props> = (props: Props) => {
  const { inputValue, onChangeInputValue, onEnterPress, currentPage } = props
  return (
    <Box>
      現在のページ: {currentPage}
      <Input
        value={inputValue}
        onChange={onChangeInputValue}
        onKeyDown={onEnterPress}
        placeholder={`${currentPage}/100`}
      />
    </Box>
  )
}
