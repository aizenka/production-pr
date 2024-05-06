describe('Article list', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('articles')
  })

  // TODO: add filters tests
  it('articles list are loaded successfully', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})