import axios from 'axios'

const baseUrl: string = 'https://jsonplaceholder.typicode.com/photos'

const api = axios.create({
  baseURL: baseUrl,
  responseType: 'json'
})

export default api
