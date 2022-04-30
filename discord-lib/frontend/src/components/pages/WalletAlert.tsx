import { FC, useState, ChangeEvent, useCallback, KeyboardEvent } from 'react'
import { Heading, Box, Text } from '@chakra-ui/react'
import { isEmpty } from 'lodash'

import { ToggleRadioButtons } from '../organisms/Forms/ToggleRadioButtons'
import { PageNationButtons } from '../organisms/PageNationButtons'
import { usePagenation } from '../../scripts/hooks/usePagenation'

export const WalletAlert: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const { goInputPage, cautionMessage, currentPage } = usePagenation({
    inputValue,
  })
  const onChangeInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    [inputValue, setInputValue]
  )
  const onEnterPressPageNationInput = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') return
      goInputPage()
    },
    [inputValue, currentPage]
  )
  console.log(currentPage)

  return (
    <Box>
      <Heading>WalletAlert</Heading>
      <ToggleRadioButtons />
      <Box mt={24}>
        <PageNationButtons
          inputValue={inputValue}
          currentPage={currentPage}
          onChangeInputValue={onChangeInputValue}
          onEnterPress={onEnterPressPageNationInput}
        />
      </Box>
      {isEmpty(cautionMessage) ? null : <Text>{cautionMessage}</Text>}
      現在のページ: {currentPage}
    </Box>
  )
}
