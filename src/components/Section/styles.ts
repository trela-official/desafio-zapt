import styled, { css } from 'styled-components'

export const Wrapper = styled.section``

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.huge};
    text-align: center;
    margin-bottom: ${theme.spacings.xlarge};
  `}
`
