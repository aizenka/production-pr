## Start project

```
  yarn - install dependencies
  yarn start:dev - start server + frontend project in dev mode
```

----

## Scripts

- `yarn start` - Running a frontend project on webpack dev server
- `yarn start:dev` - Running a frontend project on webpack dev server + backend
- `yarn start:dev:server` - Running backend server
- `yarn build` - Build in dev mode (not minimized)
- `yarn build:production` - Build in prod mode
- `yarn lint:ts` - Checking ts files with linter
- `yarn lint:ts:fix` - Fix ts files with linter
- `yarn lint:scss` - Checking style scss files with a linter
- `yarn lint:scss:fix` - Fix scss style files with a linter
- `yarn test:unit` - Running unit tests with jest
- `yarn test:ui` - Running screenshot tests with loki
- `yarn test:ui:approve` - Running screenshot tests with loki
- `yarn test:ui:report` - Generating a full report for screenshot tests
- `yarn test:ui:json` - Generating a JSON report for screenshot tests
- `yarn test:ui:html` - Generating HTML report for screenshot tests
- `yarn storybook` - Running a storybook
- `yarn build:storybook` - Build storybook
- `yarn analyze:dev` - Bundle size report in dev mode
- `yarn analyze:prod` - Bundle size report in prod mode
- `yarn generate:fsd:slice` - Script for generating FSD slices
- `yarn refactor:update:imports` - Script for updating project imports

----

## Project architecture

The project was written in accordance with the Feature Sliced ​​Design methodology.

Link to documentation - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

Link to i18next document - [i18next](https://react.i18next.com/)

----

## Tests

The project uses 3 types of tests:
1) Unit tests with jest - `yarn test:unit`
2) Component tests with React testing library - `yarn test:unit`
3) Screenshot testing with loki - `yarn test:ui`

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
uses its own eslint plugin *eslint-plugin-feature-sliced-design-path-checker*, which contains 3 rules:

1) path-checker - prohibits use of absolute imports within one module

2) layer-imports - checks the correct use of layers in terms of FSD
    (for example *widgets* cannot be used in *features* and *entitites*)

3) public-api-imports - allows import from other modules only from public api. Has auto fix

## Running a linters
- `yarn lint:ts` - Checking ts files with linter
- `yarn lint:ts:fix` - Fix ts files with linter
- `yarn lint:scss` - Checking style scss files with a linter
- `yarn lint:scss:fix` - Fix scss style files with a linter

----

## Storybook

The project describes story cases for each component.

A file with story cases is created next to the component with extension *.stories.tsx*

You can run storybook with the command:
- `yarn storybook`

Example:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { ThemeDecorator } from '@/shared/config/storybook'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Button>;


export const TextLight: Story = {
  args: {
    children: 'Text button'
  }
}

export const TextInverted: Story = {
  args: {
    children: 'Text button',
    variant: 'textInverted'
  }
}

export const OutlinedLight: Story = {
  args: {
    children: 'Outlined button',
    variant: 'outlined'
  }
}
```

----

## Project configuration

For development, the project contains webpack.

Bundler is adapted to the main features of the application.

All configuration is stored in [config](./config):
- Babel - [Babel config](./config/babel)
- Webpack - [Webpack config](./config/build)
- Tests - [Test environment config](./config/jest)
- Storybook - [Storybook config](./config/storybook)

The `scripts` folder contains various scripts for refactoring/simplifying code writing\generating reports, etc.

----

## CI pipeline and pre-commit hooks

The github actions configuration is located in [pipeline](/.github/workflows).
All types of tests, project and storybook assembly, and linting are run in ci.

In pre-commit hooks check the project with linters, config in [husky](/.husky).

----

## Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter.

Requests to the server are sent using [RTK query](/src/shared/api/rtk.ts).

For asynchronous connection of reducers (so as not to pull them into a common bundle) it is used hook
[useDynamicModuleLoader](/src/shared/lib/hooks/useDynamicModuleLoader/index.ts).

----

## Entities

- [AddCommentForm](/src/entities/AddCommentForm)
- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [ArticleRating](/src/features/ArticleRating)
- [ArticleRecommendationList](/src/features/ArticleRecommendationList)
- [AuthByUsername](/src/features/AuthByUsername)
- [AvatarDropdown](/src/features/AvatarDropdown)
- [EditableProfileCard](/src/features/EditableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [NotificationButton](/src/features/NotificationButton)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
