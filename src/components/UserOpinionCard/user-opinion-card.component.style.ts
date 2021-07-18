import styled, { css } from 'styled-components'

export const SectionWrapper = styled.section`
  ${({ theme }) => css`
    max-width: 462px;
    margin-bottom: ${theme.spacings.small};
    margin-left: ${theme.spacings.small};
  `}
`
