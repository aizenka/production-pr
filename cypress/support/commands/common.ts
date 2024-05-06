import { LOCAL_STORAGE_USER_KEY } from '@/shared/constants/localStorage'
import { selectByTestId } from '../../helpers'
import type { User } from '@/entities/User'

// TODO: store testuser123 in env
export const login = (username: string = 'testuser123', password: string = '123') => {
  return cy.request({
    method: 'POST',
    // TODO: implement new mock server
    url: 'http://localhost:8080/login',
    body: {
      username,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(body))
    return body
  })
}

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId))
}

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
    }
  }
}