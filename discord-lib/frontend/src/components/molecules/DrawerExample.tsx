import { FC, ReactNode } from 'react'
import { Button, Box, Flex } from '@chakra-ui/react'

type Props = {
  onClose: () => void
  children: ReactNode
}

export const DrawerExample: FC<Props> = (props) => {
  const { onClose, children } = props
  return (
    <>
      <Box
        position='fixed'
        top={0}
        right={0}
        bg='#585858'
        pt='40px'
        px='40px'
        h='100vh'
        w='65%'>
        <Box>
          <Flex justify='space-between' alignItems='center'>
            Create your account
            <Button onClick={onClose} bg='#8faec4'>
              X
            </Button>
          </Flex>
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  )
}
