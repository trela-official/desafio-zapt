import { Story } from '@storybook/react'
import {
  BoxArrowLeft,
  CheckCircle,
  ExclamationTriangle,
  GearFill,
  InfoCircle,
  PencilSquare,
  Save,
  Trash,
  X,
  XCircle
} from '@styled-icons/bootstrap'
import styled from 'styled-components'
import Button, { BtnProps } from '.'

const WrapperBtn = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`

export const Template: Story<BtnProps> = args => (
  <WrapperBtn>
    <Button {...args} />
    <Button {...args} icon={<Save />} />
    <Button {...args} text="" icon={<GearFill />} />
    <Button {...args} text="" icon={<Save />} />
    <Button {...args} text="" icon={<PencilSquare />} />
    <Button {...args} text="" icon={<Trash />} />
    <Button {...args} text="" icon={<X />} />
    <Button {...args} text="" icon={<InfoCircle />} />
    <Button {...args} text="" icon={<ExclamationTriangle />} />
    <Button {...args} text="" icon={<CheckCircle />} />
    <Button {...args} text="" icon={<XCircle />} />
    <Button {...args} text="" icon={<BoxArrowLeft />} />
  </WrapperBtn>
)

export const Default = Template.bind({})
