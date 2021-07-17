import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    a {
      font-weight: ${theme.font.weight.medium};
      color: ${theme.colors.primary};
      text-decoration: underline;
      text-underline-position: under;
    }
  `}
`
