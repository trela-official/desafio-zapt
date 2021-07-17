import styled, { css } from 'styled-components'
import { CardProps } from './card.model'

export const Wrapper = styled.div<CardProps>`
  ${({ theme, noGutter, color }) => css`
    position: relative;
    display: block;
    padding: ${noGutter
      ? 0
      : `${theme.spacings.large} ${theme.spacings.large}`};
    border-radius: ${theme.border.radius};
    background-color: ${color ? theme.colors[color] : theme.colors.secondary};
  `}
`