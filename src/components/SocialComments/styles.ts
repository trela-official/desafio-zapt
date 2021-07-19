import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Layouts.Col)`
  ${({ theme }) => css`
    background-color: ${theme.colors.blueLight};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xLarge} ${theme.spacings.medium};
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.large};

    ${theme.breakPoint(644)} {
      gap: ${theme.spacings.medium};
      margin-top: ${theme.grid.gutter};
    }
  `}
  display: inline-block;
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0.4rem 0.4rem 2.5rem #a9a8ae91;
  }
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${({ theme }) => theme.spacings.small};
  `}
  line-height: 1.5;
  display: flex;
  width: 100%;
`

export const WrapperUser = styled(Layouts.Row)`
  align-items: center;
`

export const WrapperLinkProfile = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    border: 0.1rem dashed transparent;

    &:focus {
      border: 0.1rem dashed ${theme.colors.gray};
      border-radius: ${theme.border.radius};
    }
  `}
`

export const WrapperImgAvatar = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.circle};
    border: 0.1rem solid ${theme.colors.primary};
    margin-right: ${theme.spacings.small};
  `}
  width: 3.5rem;
  height: 3.5rem;
  min-width: 3.5rem;
  min-height: 3.5rem;
  overflow: hidden;
`

export const ImgAvatar = styled.img`
  width: 100%;
  height: 100%;
`

export const UserName = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blueDark};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
  `}
`
