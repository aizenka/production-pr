import type { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import type { StateSchema } from 'shared/config/store'
import i18nForTests from 'shared/config/i18n/configForTests'
import type { ReducersMapObject } from '@reduxjs/toolkit'

export interface RenderComponentOptions {
  route?: string,
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export default function renderComponent (
  component: ReactNode,
  options: RenderComponentOptions = {}
) {
  const {
    route = '/',
    initialState,
    asyncReducers
  } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        initialState={initialState as StateSchema}
        asyncReducers={asyncReducers}
      >
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}