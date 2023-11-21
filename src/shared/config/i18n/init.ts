import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const i18n = i18next.createInstance()

// TODO: auto translate
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: false,
    debug: !!__IS_DEV__,

    interpolation: {
      escapeValue: false
    },

    react: {
      useSuspense: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  })


export default i18n