import { Color, FontSize, JustifyContent } from 'model/commom-style-types'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

interface HeaderProps {
  hAlign?: JustifyContent
}

export const Header = styled.header<HeaderProps>`
  ${({ hAlign }) => css`
    display: flex;
    justify-content: ${hAlign ? hAlign : 'flex-start'};
  `}
`

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    line-height: ${theme.spacings.small};
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const H3 = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
    line-height: ${theme.spacings.small};
  `}
`

export const H4 = styled.h4<BodyProps>`
  ${({ theme, color }) => css`
    color: ${color ? theme.colors[color] : theme.colors.black};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.small};
    margin: 0;
  `}
`

export const H5 = styled.h4<BodyProps>`
  ${({ theme, color }) => css`
    color: ${color ? theme.colors[color] : theme.colors.black};
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.small};
    margin: 0;
  `}
`

interface BodyProps {
  color?: Color
  size?: FontSize
}

export const Body = styled.p<BodyProps>`
  ${({ theme, color, size }) => css`
    color: ${color ? theme.colors[color] : theme.colors.black};
    font-size: ${size ? theme.font.sizes[size] : theme.font.sizes.medium};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.small};
    margin: 0;
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.small};
    `}
  `}
`
