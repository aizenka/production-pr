export const updateProfile = (firstName: string, lastName: string) => {
  cy.getByTestId('EditableProfileHeader.EditBtn').click()
  cy.getByTestId('ProfileCard.firstName').clear().type(firstName)
  cy.getByTestId('ProfileCard.lastName').clear().type(lastName)
  cy.getByTestId('EditableProfileHeader.SaveBtn').click()
}

export const resetProfile = (userId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8080/profiles/${userId}`,
    headers: { Authorization: 't$pw($48' },
    body:  {
      'age': 23,
      'avatarUrl': 'https://ideastest.org.uk/wp-content/uploads/2019/04/default.jpg',
      'city': 'Moscow',
      'country': 'Russia',
      'currency': 'RUB',
      'firstName': 'testuser123',
      'id': '4',
      'lastName': 'test',
      'username': 'testuser123'
    }
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName: string, lastName: string): Chainable<void>
      resetProfile(userId: string): Chainable<void>
    }
  }
}