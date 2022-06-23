import { FC, memo } from 'react'
import { Text, Flex, Image } from '@chakra-ui/react'

type Props = {
  imgSrc: string
  text: string
}

export const SeparateImgTxt: FC<Props> = memo((props: Props) => {
  const { imgSrc, text } = props
  return (
    <Flex gap='6px' alignItems='center' justifyContent='flex-start'>
      <Image src={imgSrc} />
      <Text>{text}</Text>
    </Flex>
  )
})
