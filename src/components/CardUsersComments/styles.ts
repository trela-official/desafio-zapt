import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const Container = styled(Layouts.Col)<{ heigthREM: number }>`
  ${({ heigthREM }) => css`
    height: ${heigthREM}rem;
  `}
  position: relative;
`

export const WrapperImgBackground = styled(Layouts.Col)`
  height: 100%;
  position: absolute;
  filter: brightness(0.6);
  border-radius: ${({ theme }) => theme.border.radius};
  overflow: hidden;
  opacity: 0;
  animation: ${({ theme }) => theme.animations.fadeInMove('0', '30px', '0')}
    0.8s ease forwards;

  & > div {
    position: relative;
  }

  img {
    object-fit: cover;
  }
`

export const WrapperInfoCard = styled(Layouts.Col)`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xLarge};
    color: ${theme.colors.white};
    row-gap: ${theme.spacings.medium};
  `};
  justify-content: flex-end;
  height: 100%;
`

export const Comment = styled.div`
  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeInMove('0', '-40px', '0')} 0.8s ease
      forwards 0.4s;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.Large};
    line-height: 1.4;
  `}
  display: flex;
  max-width: 46.2rem;
  width: 100%;
`

export const WrapperLinkUser = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    column-gap: ${theme.spacings.medium};
    border: 0.1rem dashed transparent;

    &:focus {
      border: 0.1rem dashed ${theme.colors.white};
      border-radius: ${theme.border.radius};
    }
  `}
`

export const WrapperUser = styled(Layouts.Row)`
  opacity: 0;
  animation: ${({ theme }) => theme.animations.fadeInMove('30px', '0', '0')}
    0.8s ease forwards 0.7s;
  column-gap: ${({ theme }) => theme.spacings.medium};
  row-gap: 0.5rem;
  align-items: center;
`

export const ContainerImgAvatar = styled.div`
  ${({ theme }) => css`
    border: 0.15rem solid ${theme.colors.white};
    border-radius: ${theme.border.circle};
  `}
  width: 3.9rem;
  height: 3.9rem;
  min-width: 3.9rem;
  min-height: 3.9rem;
  overflow: hidden;
`

export const ImgAvatarUser = styled.img`
  width: 100%;
  height: 100%;
`

export const UserInfo = styled(Layouts.Col)``

export const UserName = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const UserLocation = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xSmall};
  `}
`
