export const setRate = (count: number = 5, feedback?: string) => {
  cy.getByTestId(`StarRating.${count}`).click()

  if (feedback) {
    cy.getByTestId('RatingCard.FeedbackModal.Input').type(feedback)
  }

  cy.getByTestId('RatingCard.SendBtn').click()
}

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(rating?: number, feedback?: string): Chainable<void>
    }
  }
}