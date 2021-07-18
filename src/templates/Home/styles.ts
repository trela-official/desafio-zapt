import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.grid.container};
    width: 100%;
  `}
`

export const BannerWrapper = styled.section`
  ${({ theme }) => css`
    margin-top: 120px;
  `}
`

export const TestmonialsWrapper = styled.section`
  ${({ theme }) => css`
    margin-bottom: 80px;
    margin-top: 80px;
  `}
`
