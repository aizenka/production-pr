import $rtkApi from 'shared/api/rtk'
import type { Notification } from '../model/types/Notification'

const notificationApi = $rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], void>({
      query: () => ({
        url: '/notifications'
      })
    })
  })
})

export const {
  useGetNotificationsQuery: useNotifications
} = notificationApi