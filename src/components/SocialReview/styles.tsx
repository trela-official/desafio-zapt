import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    height: fit-content;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    background-color: rgba(33, 150, 243, 0.1);
  `}
`

export const FeedbackWrapper = styled.blockquote`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
  `}
`

export const Feedback = styled.p`
  &:before {
    content: open-quote;
  }
  &:after {
    content: close-quote;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
`

export const AuthorUsername = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};
  `}
`

export const AuthorAvatar = styled.img`
  ${({ theme }) => css`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    margin-right: ${theme.spacings.xsmall};
    box-shadow: 0 0 0 0.1rem ${theme.colors.primary};
  `}
`
