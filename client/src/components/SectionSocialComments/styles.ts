import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.small};

    h2 {
      text-align: center;
      margin-bottom: ${theme.spacings.xlarge};
    }

    @media (max-width: 550px) {
      h2 {
        margin-bottom: ${theme.spacings.medium};
      }
    }
  `}
`

export const WrapperCards = styled.div`
  ${({ theme }) => css`
    column-count: 3;

    > div {
      margin-bottom: ${theme.spacings.small};
    }

    @media (max-width: 768px) {
      column-count: 2;
    }

    @media (max-width: 450px) {
      column-count: 1;
    }
  `}
`
