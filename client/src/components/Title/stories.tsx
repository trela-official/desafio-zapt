import { Story, Meta } from '@storybook/react'
import theme from 'styles/theme'
import Title, {TitleStylesProps} from '.'

export default {
  title: 'Title',
  args: {
    children: 'Seja bem vindo Marcio',
    color: `${theme.colors.black}`,
    size: `${theme.font.sizes.xxlarge}`,
    fontWeight: `${theme.font.normal}`,
    lineHeight: `${theme.spacings.xxlarge}`,
    level: 1
  },  
  component: Title
} as Meta

export const Default: Story<TitleStylesProps> = (args) => <Title {...args} />
