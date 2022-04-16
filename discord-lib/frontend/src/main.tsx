import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import './index.css'
import { WalletAlert } from './components/pages/WalletAlert'
import { WatchList } from './components/pages/WatchList'

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: '#000',
        fontSize: '14px',
      },
      // グローバル設定では無理
      span: {
        border: 'none',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
