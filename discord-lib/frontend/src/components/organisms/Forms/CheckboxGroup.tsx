import { FC, memo } from 'react'
import { useCheckboxGroup, Text, Stack, HStack } from '@chakra-ui/react'
import { map } from 'lodash'

import { CustomCheckbox } from '../../atoms/Forms/CustomCheckbox'
import { SeparateImgTxt } from '../../atoms/Text/SeparateImgTxt'
import { TAG_FILTER_GROUP, TagFilterType } from '../../../scripts/checkboxGroup'

export const CheckboxGroup: FC = memo(() => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  })

  return (
    <Stack fontSize='12px' fontWeight='400'>
      <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
      {map(TAG_FILTER_GROUP, (filter: TagFilterType) => (
        <HStack key={filter.id}>
          {/* TODO: 一意なバリュー */}
          <CustomCheckbox {...getCheckboxProps({ value: filter.text[0] })}>
            <SeparateImgTxt imgSrc={filter.src[0]} text={filter.text[0]} />
          </CustomCheckbox>
          <CustomCheckbox {...getCheckboxProps({ value: filter.text[1] })}>
            <SeparateImgTxt imgSrc={filter.src[1]} text={filter.text[1]} />
          </CustomCheckbox>
        </HStack>
      ))}
    </Stack>
  )
})
