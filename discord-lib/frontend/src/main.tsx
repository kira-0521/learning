import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { DefaultChakraTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'

const theme = extendTheme({
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          border: '1px solid #080808',
          backgroundColor: '#c1c1c1',
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
    Drawer: {
      sizes: {
        '2xl': { dialog: { maxW: '800px' } },
      },
    },
  },
  styles: {
    global: {
      'html, body': {
        color: '#fff',
        fontSize: '14px',
        backgroundColor: '#202020',
      },
      // グローバル設定では無理
      span: {
        border: 'none',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
)
