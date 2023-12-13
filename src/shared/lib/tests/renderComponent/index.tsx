import { StoreProvider } from 'app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { StateSchema } from 'shared/config/store'
import { render } from '@testing-library/react'
import i18nForTests from 'shared/config/i18n/configForTests'

export interface RenderComponentOptions {
  route?: string,
  initialState?: DeepPartial<StateSchema>
}

export default function renderComponent (
  component: ReactNode,
  options: RenderComponentOptions = {}
) {
  const { route = '/', initialState } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState as StateSchema}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}