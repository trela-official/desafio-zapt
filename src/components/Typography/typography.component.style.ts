import styled, { css } from 'styled-components'

export const H2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};
    line-height: ${theme.spacings.small};
  `}
`
