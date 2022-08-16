import axios from 'axios'

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    // prettier-ignore
    'Authorization': `Bearer ${process.env.REACT_APP_ID_TOKEN}`,
  },
})

export const testGetApiGateway = async () => {
  const res = await apiInstance.get('/cognitostatus')
  return res
}

export const changeCognitoStatus = async () => {
  const IS_TO_VALID = false
  const CHANGE_STATUS_USERS = ['kiratanaka0521']
  const { data } = await apiInstance.post('/cognitostatus', {
    is_to_valid: IS_TO_VALID,
    users: CHANGE_STATUS_USERS,
  })
  return data
}
