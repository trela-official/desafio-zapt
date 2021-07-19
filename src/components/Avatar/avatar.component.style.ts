import styled, { css } from 'styled-components'

import { AvatarProps } from './avatar.model'

export const Avatar = styled.div<AvatarProps>`
  ${({ size, imageUrl, borderColor, theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size ? theme.imageSizes[size] : theme.imageSizes.small};
    height: ${size ? theme.imageSizes[size] : theme.imageSizes.small};
    background: ${theme.colors.white} url(${imageUrl}) no-repeat center center;
    background-size: cover;
    color: ${theme.colors.black};
    border-radius: ${theme.border.circle};
    border: 1px solid
      ${borderColor ? theme.colors[borderColor] : theme.colors.white};
  `}
`
