import type { Article } from '@/entities/Article'

let currentArticle: Article

describe('Article details', () => {
  beforeEach(() => {
    cy.login()
    // cy.intercept('GET', '**/articles/*', { fixture: 'articleDetails.json' })
    cy.createArticle().then(article => {
      currentArticle = article
      cy.visit(`articles/${article.id}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(currentArticle.id)
  })


  it('article are loaded successfully', () => {
    cy.getByTestId('ArticleDetails').should('exist')
    cy.getByTestId('ArticleDetails.Header').should('have.text', currentArticle.title)
    cy.getByTestId('ArticleDetails.Paragraph').should('have.text', currentArticle.subtitle)
  })

  it('recommendation list are loaded successfully', () => {
    cy.getByTestId('ArticleRecommendationList').should('exist')
  })

  it('comment should be posted', () => {
    const commentText = 'testCommentText'

    cy.getByTestId('ArticleDetails')
    cy.getByTestId('AddCommentForm').scrollIntoView()

    cy.addComment(commentText)
    cy.getByTestId('CommentList').should('have.length', 1)
    cy.getByTestId('CommentCard.Paragraph').should('have.text', commentText)
  })

  it('rating of the article must be assessed', () => {
    cy.getByTestId('ArticleDetails')
    cy.getByTestId('RatingCard').scrollIntoView()

    cy.setRate(5, 'feedback')
    cy.get('[data-selected=true]').should('have.length', 5)
  })
})