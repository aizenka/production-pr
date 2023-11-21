import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const i18nForTests = i18next.createInstance()

i18nForTests
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

export default i18nForTests