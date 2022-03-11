import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme'

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme='teal'>Button</Button>
    </ChakraProvider>
  )
}
