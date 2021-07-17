import styled, { css } from 'styled-components'
import { CardProps } from './card.model'

export const Wrapper = styled.div<CardProps>`
  ${({ theme, hasGutter, color }) => css`
    position: relative;
    display: block;
    border-radius: ${theme.border.radius};
    background-color: ${color ? theme.colors[color] : theme.colors.white};
    ${hasGutter && `padding: ${theme.spacings.large} ${theme.spacings.large}`}
  `}
`
