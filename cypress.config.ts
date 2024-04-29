import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents () {},
    // TODO: add process env
    baseUrl: 'http://localhost:3000'
  }
})
