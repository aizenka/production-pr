import i18next, { i18n } from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18n = i18next.createInstance()

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: false,

    debug: false,

    interpolation: {
      escapeValue: false
    },

    resources: { en: { translations: {} } }
  })

export default i18n