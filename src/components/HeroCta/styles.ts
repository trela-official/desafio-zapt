import styled, { css } from 'styled-components'

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`
