import type { Article } from '@/entities/Article'

const mockArticle = {
  'createdAt': '26.04.2022',
  'img': 'https://teknotower.com/wp-content/uploads/2020/14949/js.png',
  'subtitle': 'TESTING SUBTITLE',
  'title': 'TESTING TITLE',
  'type': [
    'IT'
  ],
  'blocks': [],
  'userId': '4',
  'views': 1022
}

export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8080/articles',
    headers: { Authorization: 't$pw($48' },
    body: article || mockArticle
  }).then(({ body }): Article => {
    return body
  })
}

export const removeArticle = (articleId: string) => {
  cy.request({
    method: 'DELETE',
    headers: { Authorization: 't$pw($48' },
    url: `http://localhost:8080/articles/${articleId}`
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}