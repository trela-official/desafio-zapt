import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 120rem;
    gap: ${theme.spacings.xxlarge};
  `}
`

export const TitleWrapper = styled.div`
  text-align: center;
`

export const CommentsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    align-content: space-between;
    height: 63.4rem;
    gap: ${theme.spacings.small};
    max-width: fit-content;
  `}
`
