import { Story, Meta } from '@storybook/react'
import mockHeroCtaArgs from './mock'
import HeroCta, { HeroCtaProps } from '.'

export default {
  title: 'HeroCta',
  component: HeroCta,
  argTypes: {
    heroTitle: { type: 'string ' },
    heroSubtitle: { type: 'string ' },
    ctaTitle: { type: 'string ' },
    firstOptionLabel: { type: 'string ' },
    secondOptionLabel: { type: 'string ' }
  }
} as Meta

export const Default: Story<HeroCtaProps> = (args) => <HeroCta {...args} />

Default.args = {
  ...mockHeroCtaArgs
}
