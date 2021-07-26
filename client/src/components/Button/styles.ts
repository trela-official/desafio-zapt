import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    border: 0;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    margin-right: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    outline: none;
    transition: ${theme.transition.default};

    &:hover {
      background: ${theme.colors.secondary};
    }

    &:last-child {
      margin: 0;
    }

    ${media.lessThan('medium')`
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`
