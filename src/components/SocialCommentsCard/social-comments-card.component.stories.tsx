import { Story, Meta } from '@storybook/react'
import { SocialCommentsCard } from './social-comments-card.component'

export default {
  title: 'SocialCommentsCard component',
  component: SocialCommentsCard
} as Meta

export const SocialCommentsCardStory: Story = (args) => (
  <SocialCommentsCard
    avatarUrl={avatarUrl}
    description={description}
    name={name}
    {...args}
  />
)

const avatarUrl =
  'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80'

const name = 'card name'
const description = 'card description'

SocialCommentsCardStory.args = {
  avatarUrl,
  name,
  description
}
