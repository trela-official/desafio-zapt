import styled, { css } from 'styled-components'

import { SocialCommentsWrapper } from 'templates/Home/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.base};

    padding: ${theme.spacings.lg} ${theme.spacings.base};

    background-color: ${theme.colors.backgroundLight};
    border-radius: ${theme.border.radius};

    ${SocialCommentsWrapper} & {
      margin-bottom: ${theme.grid.gutter};
    }
  `}
`

export const Comment = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    line-height: 2.2rem;
  `}
`

export const User = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.sm};
  `}
`

export const Name = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primaryDark};
    font-size: ${theme.font.sizes.small};
  `}
`
