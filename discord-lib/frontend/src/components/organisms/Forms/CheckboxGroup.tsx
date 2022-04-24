import { FC, memo } from 'react'
import { useCheckboxGroup, Text, Stack, HStack } from '@chakra-ui/react'

import { CustomCheckbox } from '../../atoms/Forms/CustomCheckbox'
import { SeparateImgTxt } from '../../atoms/Text/SeparateImgTxt'
import ARROW_LEFT_UP from '../../../assets/svg/arrow_left_up.svg'
import ARROW_LEFT_DOWN from '../../../assets/svg/arrow_left_down.svg'
import ARROW_RIGHT_UP from '../../../assets/svg/arrow_right_up.svg'
import ARROW_RIGHT_DOWN from '../../../assets/svg/arrow_right_down.svg'
import WAVE_ARROW_UP from '../../../assets/svg/wave_arrow_up.svg'
import WAVE_ARROW_DOWN from '../../../assets/svg/wave_arrow_down.svg'
import WAVE_ARROW_LEFT from '../../../assets/svg/wave_arrow_left.svg'
import WAVE_ARROW_RIGHT from '../../../assets/svg/wave_arrow_right.svg'
import MULTIPLY from '../../../assets/svg/multiply.svg'
import PLUS from '../../../assets/svg/plus.svg'

export const CheckboxGroup: FC = memo(() => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  })

  return (
    <Stack fontSize='12px' fontWeight='400'>
      <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'ARROW_LEFT_UP' })}>
          <SeparateImgTxt imgSrc={ARROW_LEFT_UP} text={`arLeft`} />
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: 'ARROW_LEFT_DOWN' })}>
          <SeparateImgTxt imgSrc={ARROW_LEFT_DOWN} text={`arLeft`} />
        </CustomCheckbox>
      </HStack>{' '}
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'ARROW_RIGHT_UP' })}>
          <SeparateImgTxt imgSrc={ARROW_RIGHT_UP} text={`Arrow\nRight`} />
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: 'ARROW_RIGHT_DOWN' })}>
          <SeparateImgTxt imgSrc={ARROW_RIGHT_DOWN} text={`Arrow\nRight`} />
        </CustomCheckbox>{' '}
      </HStack>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'WAVE_ARROW_UP' })}>
          <SeparateImgTxt imgSrc={WAVE_ARROW_UP} text={`Wave\nArrow`} />
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: 'WAVE_ARROW_DOWN' })}>
          {' '}
          <SeparateImgTxt imgSrc={WAVE_ARROW_DOWN} text={`Wave\nArrow`} />
        </CustomCheckbox>
      </HStack>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'WAVE_ARROW_LEFT' })}>
          <SeparateImgTxt imgSrc={WAVE_ARROW_LEFT} text={`Wave\nArrow`} />
        </CustomCheckbox>{' '}
        <CustomCheckbox {...getCheckboxProps({ value: 'WAVE_ARROW_RIGHT' })}>
          <SeparateImgTxt imgSrc={WAVE_ARROW_RIGHT} text={`Wave\nArrow`} />
        </CustomCheckbox>
      </HStack>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'MULTIPLY' })}>
          <SeparateImgTxt imgSrc={MULTIPLY} text='Multiply' />
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: '1PLUS' })}>
          <SeparateImgTxt imgSrc={PLUS} text='Plus' />
        </CustomCheckbox>
      </HStack>
    </Stack>
  )
})
