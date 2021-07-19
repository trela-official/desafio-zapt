import { Story } from '@storybook/react'
import TitleSection, { TitleProps } from '.'

const Template: Story<TitleProps> = args => <TitleSection {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Este é um título de exemplo'
}
