import type { Meta, StoryObj } from '@storybook/react'
import UserIcon from '@/shared/assets/tests/storybook-test-avatar.jpg'

import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component:  Avatar,
  parameters: {},
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Avatar>;


export const Primary: Story = {
  args: {
    src: UserIcon,
    alt: 'storycase image'
  }
}