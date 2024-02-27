import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'

const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API_URL__,
    prepareHeaders: Headers => {
      const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY) || ''

      if (token) {
        Headers.set('authorization', token)
      }

      return Headers
    }
  }),
  endpoints: () => ({})
})

export default rtkApi