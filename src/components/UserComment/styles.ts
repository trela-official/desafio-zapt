import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { UserCommentProps } from '.'

export const Wrapper = styled.div<Pick<UserCommentProps, 'backgroundImage'>>`
  ${({ backgroundImage, theme }) => css`
    display: flex;
    align-items: flex-end;
    height: 40rem;
    position: relative;

    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    border-radius: ${theme.border.radius};

    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;

      background-image: url('/img/noisy-overlay.png'),
        radial-gradient(
          112.99% 451.94% at 0% 100%,
          #000000 0%,
          rgba(0, 0, 0, 0) 100%
        );
      border-radius: ${theme.border.radius};
      opacity: 0.8;
    }
  `}
`

export const CommentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.base};
    padding: ${theme.grid.gutter};

    z-index: ${theme.layers.overlay};

    ${media.greaterThan('small')`
      padding-right: 4.5rem;
    `}

    ${media.greaterThan('medium')`
      padding-right: 7.5rem;
    `}

    ${media.greaterThan('large')`
      padding-right: 14.5rem;
    `}
  `}
`

export const Comment = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 1.8rem;
    line-height: 2.4rem;

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.lg};
      line-height: 2.6rem;
    `}
  `}
`

export const User = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.sm};
  `}
`

export const UserInfo = styled.div``

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.regular};
    font-size: ${theme.font.sizes.base};
    line-height: 2rem;
  `}
`

export const Location = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xs};
    line-height: 1.4rem;
    opacity: 0.8;

    ${media.greaterThan('small')`
      line-height: 2rem;
    `}
  `}
`
