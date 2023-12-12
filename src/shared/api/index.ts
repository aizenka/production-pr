import axios from 'axios'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'

const $api = axios.create({
  baseURL: __API_URL__,
  headers: {
    Authorization: localStorage.getItem(LOCAL_STORAGE_USER_KEY)
  }
})

export default $api