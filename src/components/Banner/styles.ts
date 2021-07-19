import styled, { css } from 'styled-components'
import { darken } from 'polished'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.bgBanner};
    border-radius: ${theme.border.radius};
    display: grid;
    grid-template-columns: 1fr auto;
    place-items: center;
    position: relative;

    ${media.lessThan('medium')`
      gap:  ${theme.grid.gutter};
      grid-template-columns: 1fr;
    `}

    &:before {
      background: ${theme.colors.secondary};
      border-radius: 50% 50% 50% 0% / 50% 50% 50% 0%;
      content: '';
      height: 62px;
      left: -25px;
      position: absolute;
      top: -19px;
      width: 62px;

      ${media.lessThan('medium')`
        height: 31px;
        left: -8px;
        top: -10px;
        width: 31px;
      `}
    }
  `}
`

export const Content = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xxsmall};

    ${media.lessThan('medium')`
      margin-left: ${theme.spacings.large};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.line.medium};
    max-width: 58.8rem;
  `}
`

export const ContentAction = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.medium};
  `}
`

export const ActionQuestion = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semibold};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const ButtonAction = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    border: ${theme.border.none};
    color: ${theme.colors.white};
    cursor: pointer;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    transition: all ${theme.transition.default};

    &:hover {
      background: ${darken(0.05, theme.colors.primary)};
      color: ${darken(0.05, theme.colors.white)};
    }
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: auto auto;
    width: fit-content;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    &:before {
      background: ${theme.colors.white};
      border-radius: 50%;
      content: '';
      height: 80px;
      left: 71px;
      position: absolute;
      top: 16px;
      width: 80px;

      ${media.lessThan('medium')`
        height: 40px;
        width: 40px;
        top: 40px;
      `}
    }

    &:after {
      background: ${theme.colors.primary};
      border-radius: 50% 50% 50% 0% / 50% 50% 50% 0%;
      bottom: -30px;
      content: '';
      height: 100px;
      position: absolute;
      right: -43px;
      width: 100px;

      ${media.lessThan('medium')`
        bottom: -15px;
        height: 50px;
        right: -10px;
        width: 50px;
      `}
    }
  `}
`

export const SemicircleWrapper = styled.div`
  bottom: 35px;
  position: absolute;
  right: 38px;

  ${media.lessThan('medium')`
    svg {
      width: 80px;
    }
  `}
`

export const BannerImage = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    display: block;
    max-height: 313px;
    max-width: 100%;
    object-fit: cover;

    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    grid-column: 1/-1;
    padding: ${theme.spacings.small} 0;
    width: 100%;

    ${media.lessThan('medium')`
      text-align: center;
      padding: ${theme.spacings.xxsmall} 0;
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    cursor: pointer;
    margin-left: 0.4rem;
    text-decoration: underline;
    text-underline-position: under;
  `}
`
