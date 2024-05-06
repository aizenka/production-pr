let profileId: string

describe('Profile', () => {
  beforeEach(() => {
    cy.login().then(user => {
      profileId = user.id
      cy.visit(`profile/${user.id}`)
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('profile successfully loaded', () => {
    cy.getByTestId('ProfileCard.firstName').should('have.value', 'testuser123')
  })

  it('editing profile', () => {
    const editedFirstName = 'newFirstName'
    const editedLastName = 'newLastName'

    cy.updateProfile(editedFirstName, editedLastName)

    cy.getByTestId('ProfileCard.firstName').should('have.value', editedFirstName)
    cy.getByTestId('ProfileCard.lastName'). should('have.value', editedLastName)
  })
})