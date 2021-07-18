import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.main`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.grid.container};
    padding: 0 ${theme.spacings.small};
    width: 100%;
  `}
`

export const BannerWrapper = styled.section`
  ${({ theme }) => css`
    margin-top: 120px;

    ${media.lessThan('medium')`
      margin-top: 40px;
    `}
  `}
`

export const TestimonialsWrapper = styled.section`
  ${({ theme }) => css`
    margin-bottom: 80px;
    margin-top: 80px;

    ${media.lessThan('medium')`
      margin-top: 40px;
    `}
  `}
`
