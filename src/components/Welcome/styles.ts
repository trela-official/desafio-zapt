import { lighten } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Section = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};

    ${media.greaterThan('small')`
      padding: ${theme.spacings.large};
    `};

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.xlarge} ${theme.spacings.huge};
    `};

    ${media.greaterThan('large')`
      padding:  ${theme.spacings.huge};
    `};
  `}
`

export const Wrapper = styled.article`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1.5rem;
`
export type LogoWrapperProps = {
  corner: 'top-left' | 'bottom-right'
}

const logoWrapperModifiers = {
  'top-left': () => css`
    top: 0;
    left: 0;
    transform: translate(-30%, -30%);
  `,
  'bottom-right': () => css`
    bottom: 0;
    right: 0;
    transform: translate(30%, 30%);
  `
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  ${({ corner }) => css`
    position: absolute;

    ${media.lessThan('large')`
      display: none;
    `}

    ${!!corner && logoWrapperModifiers[corner]}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    flex-grow: 1;
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    padding: 1.8rem 0.8rem;

    ${media.greaterThan('small')`
      padding: 2rem 0.8rem;
    `};

    ${media.greaterThan('medium')`
      padding: 5.6rem 10rem;
    `};

    ${media.greaterThan('large')`
      margin-right: -${theme.spacings.xsmall};
    `};
  `}
`
export type ImageWrapperProps = {
  img: string
  mask?: string
}

const imageWrapperModifiers = {
  mask: (mask: string) => css`
    mask: url(${mask});
  `
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  ${({ img, mask }) => css`
    position: relative;
    width: 50rem;
    background-image: url(${img});
    background-position: center center;
    background-size: cover;

    ${media.lessThan('large')`
      display: none;
    `};

    ${!!mask && imageWrapperModifiers.mask(mask)};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.xlarge} - 0.2rem);
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xxsmall};

    &:after {
      content: ',';
    }

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.xlarge};
    `};
  `}
`

export const Message = styled.p`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.medium} - 0.2rem);
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('small')`
        font-size: ${theme.font.sizes.medium};
    `};
  `}
`

export const Question = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.medium};
    /* Button padding + margin */
    margin-bottom: calc(${theme.spacings.small} + ${theme.spacings.xsmall});
  `}
`

export const Options = styled.nav`
  margin-bottom: 1.8rem;
`

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    list-style-type: none;
    justify-content: space-between;

    ${media.greaterThan('small')`
      justify-content: flex-start;
      gap: ${theme.spacings.small};
    `}
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    text-decoration: none;
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
    white-space: nowrap;
    transition: background 0.2s ease-in-out;

    ${media.greaterThan('small')`
      padding: ${theme.spacings.small} ${theme.spacings.large} 1.8rem ${theme.spacings.large};
    `};

    &:hover {
      background: ${lighten(0.1, theme.colors.blue)};
    }
  `}
`

export const ContactLink = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};

    a {
      color: ${theme.colors.blue};
    }

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.small};
    `};
  `}
`

export const Circle = styled.svg`
  position: absolute;
  top: 1.6rem;
  left: 7.1rem;
  width: 8rem;
  height: 8rem;
`

export const Curve = styled.svg`
  position: absolute;
  bottom: 3.7rem;
  right: 3.8rem;
  width: 17.2rem;
  height: 10.5rem;
`
