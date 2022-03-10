import { Button, ChakraProvider } from '@chakra-ui/react'
import './index.css'

export default function App() {
  return (
    <ChakraProvider>
      <Button colorScheme='teal'>Button</Button>
    </ChakraProvider>
  )
}
