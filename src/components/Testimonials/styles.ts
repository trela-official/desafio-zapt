import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section``
export const Content = styled.section``

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    line-height: ${theme.font.line.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    text-align: center;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.large};
    `}
  `}
`

export const TestimonialsCards = styled.section`
  ${({ theme }) => css`
    column-gap: ${theme.grid.gutter};
    columns: 384px 3;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.bglight};
    border-radius: ${theme.border.radius};
    break-inside: avoid;
    margin-bottom: ${theme.grid.gutter};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
  `}
`

export const MessageUser = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    line-height: ${theme.font.line.large};
    letter-spacing: -1%;
  `}
`

export const Author = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.darkBlue};
    display: flex;
    font-family: ${theme.font.family.secondary};
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.small};
  `}
`

export const AuthorImg = styled.img`
  ${({ theme }) => css`
    border-radius: 50%;
    border: 1px solid ${theme.colors.primary};
    height: 36px;
    margin-right: ${theme.spacings.xsmall};
    width: 36px;
  `}
`
