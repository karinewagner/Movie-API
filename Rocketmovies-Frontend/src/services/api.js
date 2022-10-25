import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://apirocketmovies.herokuapp.com'
})