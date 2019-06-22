import axios from 'axios'

const APICreate = () => {
  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: '3000',
    headers: { 'ContentType' : 'application/json' }
  })

  const getUser = async () => api.get('/users')

  return {
    getUser
  }
}


export default {
  APICreate
}