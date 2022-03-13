import { memo, VFC } from 'react'
import { Box, Stack, Image, Text } from '@chakra-ui/react'

type Props = {
  imageUrl: string
  name: string
  fullName: string
}

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, name, fullName } = props

  return (
    <Box
      w='260px'
      h='260px'
      bg='white'
      borderRadius='10px'
      shadow='md'
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}>
      <Stack textAlign='center'>
        <Image
          borderRadius='full'
          boxSize='160px'
          src={imageUrl}
          alt='プロフ画像'
          m='auto'
        />
        <Text fontSize='lg' fontWeight='bold'>
          {name}
        </Text>
        <Text fontSize='sm' color='gray'>
          {fullName}
        </Text>
      </Stack>
    </Box>
  )
})
