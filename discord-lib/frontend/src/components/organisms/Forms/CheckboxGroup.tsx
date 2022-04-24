import { FC, memo } from 'react'
import {
  useCheckboxGroup,
  Text,
  Stack,
  HStack,
  Flex,
  Image,
} from '@chakra-ui/react'

import { CustomCheckbox } from '../../atoms/Forms/CustomCheckbox'
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

  console.log(value)

  return (
    <Stack fontSize='12px' fontWeight='400'>
      <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'ARROW_LEFT_UP' })}>
          <Flex>
            <Image src={ARROW_LEFT_UP} />
            <Text>{`Arrow\nLeftUp`}</Text>
          </Flex>
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: 'ARROW_LEFT_DOWN' })}>
          <Flex>
            <Image src={ARROW_LEFT_DOWN} />
            <Text>{`Arrow\nLeftDown`}</Text>
          </Flex>
        </CustomCheckbox>
      </HStack>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'ARROW_RIGHT_UP' })}>
          <Flex>
            <Image src={ARROW_RIGHT_UP} />
            <Text>{`Arrow\nRightUp`}</Text>
          </Flex>
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: 'ARROW_RIGHT_DOWN' })}>
          <Flex>
            <Image src={ARROW_RIGHT_DOWN} />
            <Text>{`Arrow\nRightUp`}</Text>
          </Flex>
        </CustomCheckbox>
      </HStack>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'WAVE_ARROW_UP' })}>
          <Flex>
            <Image src={WAVE_ARROW_UP} />
            <Text>{`Wave\nArrowUp`}</Text>
          </Flex>
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: 'WAVE_ARROW_DOWN' })}>
          <Flex>
            <Image src={WAVE_ARROW_DOWN} />
            <Text>{`Wave\nArrowDown`}</Text>
          </Flex>
        </CustomCheckbox>
      </HStack>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'WAVE_ARROW_LEFT' })}>
          <Flex>
            <Image src={WAVE_ARROW_LEFT} />
            <Text>{`Wave\nArrowLeft`}</Text>
          </Flex>
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: 'WAVE_ARROW_RIGHT' })}>
          <Flex>
            <Image src={WAVE_ARROW_RIGHT} />
            <Text>{`Wave\nArrowRight`}</Text>
          </Flex>
        </CustomCheckbox>
      </HStack>
      <HStack>
        <CustomCheckbox {...getCheckboxProps({ value: 'MULTIPLY' })}>
          <Flex>
            <Image src={MULTIPLY} />
            <Text>Multiply</Text>
          </Flex>
        </CustomCheckbox>
        <CustomCheckbox {...getCheckboxProps({ value: '1PLUS' })}>
          <Flex>
            <Image src={PLUS} />
            <Text>Plus</Text>
          </Flex>
        </CustomCheckbox>
      </HStack>
    </Stack>
  )
})
