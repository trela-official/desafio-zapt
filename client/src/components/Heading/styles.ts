import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

export const Wrapper = styled.h1.attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`
}))<HeadingProps>`
  ${({ theme, color, size, fontWeight, lineHeight }) => css`
    font-size: ${theme.font.sizes[size!]};
    color: ${color};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `}
`
