import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StoreProvider } from '@/app/providers/StoreProvider'
import App from './app/App'
import '@/shared/config/i18n/init'

/* TODO (global)
  remove enums https://github.com/typescript-eslint/typescript-eslint/issues/561
  add test coverage map
  move types to a separate folder and add public api (all components)
  fix consistent-type eslint (webpack, config)
  review storybook components (all)
  refactor code with buildSlice, buildSelector
  add lint-staged
  fix custom linter (absolute path for inside public api file)
  disable animations in storybook components for loki (https://loki.js.org/flaky-tests.html#transitions-and-animations)
  fix errors on ("@reduxjs/toolkit": "^2.2.3", react-redux": "^9.1.1")
*/

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)