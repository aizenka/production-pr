import * as commonCommands from './commands/common'
import * as profileCommands from './commands/profile'
import * as articleDetailsCommands from './commands/articleDetails'
import * as commentCommands from './commands/comments'
import * as ratingCommands from './commands/rating'

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleDetailsCommands)
Cypress.Commands.addAll(commentCommands)
Cypress.Commands.addAll(ratingCommands)