import { Story, Meta } from '@storybook/react'
import SocialComment, { SocialCommentProps } from '.'

export default {
  title: 'SocialComment',
  component: SocialComment,
  args: {
    image: '/img/sample-person.jpeg',
    comment:
      'Estava precisando achar algum lugar que vendia produtos que vêem direto da fazenda... a Zapt salvou.. e ainda paguei um preço muito mais barato que supermecado 🙌',
    name: '@rafael'
  }
} as Meta

export const Default: Story<SocialCommentProps> = (args) => (
  <div style={{ maxWidth: '38.4rem', margin: 'auto' }}>
    <SocialComment {...args} />
  </div>
)
