import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 100px;
`

export const WrapperSlider = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 100px auto 0;
    padding: 0 ${theme.spacings.xxsmall};

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
