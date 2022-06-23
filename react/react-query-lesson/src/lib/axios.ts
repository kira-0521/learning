import axios from 'axios'

console.log('BASE_URL', process.env.REACT_APP_BASE_URL)

const instance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: process.env.REACT_APP_BASE_URL,
})

export default instance
