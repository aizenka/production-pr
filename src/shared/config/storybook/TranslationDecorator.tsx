import { Decorator } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/init'

const TranslationDecorator: Decorator = (Story) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  )
}

export default TranslationDecorator