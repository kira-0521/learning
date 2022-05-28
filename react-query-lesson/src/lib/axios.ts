import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: process.env.BASE_URL,
})

export default instance
