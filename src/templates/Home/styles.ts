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
    margin-top: ${theme.spacings.mxlarge};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.large};
    `}
  `}
`

export const TestimonialsWrapper = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.mlarge};
    margin-top: ${theme.spacings.mlarge};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.large};
    `}
  `}
`
