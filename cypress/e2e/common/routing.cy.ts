describe('Routing', () => {
  describe('user is not authorized', () => {
    it('go to main page', () => {
      cy.visit('/')
      cy.getByTestId('MainPage').should('exist')
    })

    it('after going to the profile page, there should be a redirect to the main page', () => {
      cy.visit('/profile/1')
      cy.getByTestId('MainPage').should('exist')
    })

    it('going to a non-existent route', () => {
      cy.visit('/kdkdfk')
      cy.getByTestId('NotFoundPage').should('exist')
    })
  })

  describe('user is authorized', () => {
    beforeEach(() => {
      cy.login()
    })

    it('go to profile page', () => {
      cy.visit('/profile/1')
      cy.getByTestId('ProfilePage').should('exist')
    })

    it('go to articles page', () => {
      cy.visit('/articles')
      cy.getByTestId('ArticlesPage').should('exist')
    })

    it('go to article details page', () => {
      cy.visit('/articles/1')
      cy.getByTestId('ArticleDetailsPage').should('exist')
    })
  })
})