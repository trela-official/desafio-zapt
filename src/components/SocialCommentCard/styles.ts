import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    width: 38.4rem;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    background-color: ${theme.colors.lightBlueBg};
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
