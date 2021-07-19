import styled, { css } from 'styled-components'
import { CommentCardProps } from '.'

type CardStyle = Pick<
  CommentCardProps,
  'removeBackgroundColor' | 'removePadding'
>

export const Card = styled.div<CardStyle>`
  ${({ theme, removeBackgroundColor, removePadding }) => css`
    width: 38.4rem;

    padding: ${removePadding
      ? '0px'
      : `${theme.spacings.medium} ${theme.spacings.small}`};

    background-color: ${removeBackgroundColor
      ? 'transparent'
      : `${theme.colors.lightBlueBg}`};

    border-radius: ${theme.border.radius};
  `}
`

export const UserImage = styled.img``

export const UserProfile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.small};
    gap: ${theme.spacings.xsmall};
  `}
`
