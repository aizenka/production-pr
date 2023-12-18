import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'

import ProfilePage from './ProfilePage'

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component:  ProfilePage,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ProfilePage>;

const profileData = {
  firstName: 'asd',
  lastName: 'dsa',
  age: 33,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: 'Moscow',
  username: 'admin'
}

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: profileData
      }
    })
  ]
}

export const Dark: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: profileData
      }
    }),
    ThemeDecorator(Theme.DARK)
  ]
}