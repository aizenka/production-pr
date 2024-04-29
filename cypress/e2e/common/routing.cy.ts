import { selectByTestId } from 'cypress/helpers'

describe('Routing', () => {
  describe('user is not authorized', () => {
    it('go to main page', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('after going to the profile page, there should be a redirect to the main page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('going to a non-existent route', () => {
      cy.visit('/kdkdfk')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('user is authorized', () => {
    beforeEach(() => {
      cy.login()
    })

    it('go to profile page', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('go to articles page', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })

    it('go to article details page', () => {
      cy.visit('/articles/1')
      cy.get(selectByTestId('ArticleDetailsPage')).should('exist')
    })
  })
})