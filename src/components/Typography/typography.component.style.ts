import { Color } from 'model/commom-style-types'
import styled, { css } from 'styled-components'

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    line-height: ${theme.spacings.small};
  `}
`

interface BodyProps {
  color?: Color
}

export const Body = styled.p<BodyProps>`
  ${({ theme, color }) => css`
    color: ${color ? theme.colors[color] : theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.small};
    margin: 0;
  `}
`

export const BodySecondary = styled.label<BodyProps>`
  ${({ theme, color }) => css`
    color: ${color ? theme.colors[color] : theme.colors.black};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.small};
    margin: 0;
  `}
`
