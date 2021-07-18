import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto;
    place-items: center;
    background: ${theme.colors.bgBanner};
    border-radius: ${theme.border.radius};
    position: relative;

    &:before {
      content: '';
      width: 62px;
      height: 62px;
      background: ${theme.colors.secondary};
      position: absolute;
      border-radius: 50% 50% 50% 0% / 50% 50% 50% 0%;
      top: -19px;
      left: -25px;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css``}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    max-width: 58.8rem;
    line-height: ${theme.font.line.medium};
  `}
`

export const ContentAction = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
  `}
`

export const ActionQuestion = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semibold};
    margin-bottom: ${theme.spacings.xsmall};
    color: ${theme.colors.black};
  `}
`

export const ButtonAction = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: ${theme.border.none};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small} ${theme.spacings.large};
    cursor: pointer;
    transition: all ${theme.transition.default};

    &:hover {
      color: ${darken(0.05, theme.colors.white)};
      background: ${darken(0.05, theme.colors.primary)};
    }
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    display: grid;
    grid-template-columns: auto auto;
    gap: ${theme.spacings.small};
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    &:before {
      content: '';
      width: 80px;
      height: 80px;
      background: ${theme.colors.white};
      position: absolute;
      border-radius: 50%;
      top: 16px;
      left: 71px;
    }

    &:after {
      content: '';
      width: 100px;
      height: 100px;
      background: ${theme.colors.primary};
      position: absolute;
      border-radius: 50% 50% 50% 0% / 50% 50% 50% 0%;
      bottom: -30px;
      right: -43px;
    }
  `}
`

export const SemicircleWrapper = styled.div`
  position: absolute;
  right: 38px;
  bottom: 35px;
`

export const BannerImage = styled.img`
  ${({ theme }) => css`
    display: block;
    max-width: 100%;
    max-height: 313px;
    object-fit: cover;
    border-radius: ${theme.border.radius};
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
    padding: ${theme.spacings.small} 0;
    grid-column: 1/-1;
    background: ${theme.colors.white};
    width: 100%;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-left: 0.4rem;
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
  `}
`
