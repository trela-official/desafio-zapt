import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};

    ${media.greaterThan('small')`
      padding: ${theme.spacings.large} ${theme.spacings.xlarge};
    `}
    ${media.greaterThan('large')`
      padding: ${theme.spacings.xxlarge} ${theme.spacings.huge};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`
