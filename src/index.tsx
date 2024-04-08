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