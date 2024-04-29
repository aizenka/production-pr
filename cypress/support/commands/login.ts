import { LOCAL_STORAGE_USER_KEY } from '../../../src/shared/constants/localStorage'

// TODO: store testuser123 in env
export const login = ( username: string = 'testuser123', password: string = '123' ) => {
  cy.request({
    method: 'POST',
    // TODO: implement new mock server
    url: 'http://localhost:8080/login',
    body: {
      username,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(body))
  })
}