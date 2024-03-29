import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/shared/constants/theme'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'
import UserIcon from '@/shared/assets/tests/storybook-test-avatar.jpg'

import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component:  ProfileCard,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ProfileCard>;

const profileData = {
  firstName: 'asd',
  lastName: 'dsa',
  age: 33,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: 'Moscow',
  username: 'admin',
  avatarUrl: UserIcon
}


export const Light: Story = {
  args: {
    profileData
  },
  decorators: [
    StoreDecorator({})
  ]
}

export const Dark: Story = {
  args: {
    profileData
  },
  decorators: [
    StoreDecorator({}),
    ThemeDecorator(Theme.DARK)
  ]
}

export const WithError: Story = {
  args: {
    isLoading: true
  },
  decorators: [
    StoreDecorator({})
  ]
}

export const WithLoading: Story = {
  args: {
    error: 'true'
  },
  decorators: [
    StoreDecorator({})
  ]
}