import axios from 'axios'

const baseUrl = '/api/login'
const logoutUrl = '/api/logout'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  console.log('response', response)
  return response.data
}

const logout = () => {
  const res = axios.get(logoutUrl)
  return res.data
}

export { login }
