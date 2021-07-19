import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
`

type NoiseOverlayProps = {
  src: string
}

export const NoiseOverlay = styled.div<NoiseOverlayProps>`
  ${({ theme, src }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    z-index: ${theme.layers.base};
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: 20rem;
    width: 100%;
    height: 100%;

    img {
      min-height: 100%;
      max-width: 100%;
      object-fit: cover;
      border-radius: ${theme.border.radius};
    }

    /** Image Overlay */
    &:before {
      content: '';
      position: absolute;
      border-radius: ${theme.border.radius};
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: radial-gradient(
        circle at -20% 120%,
        ${theme.colors.black},
        transparent
      );
    }

    ${media.greaterThan('medium')`
      min-height: 40rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    max-width: 75%;
    left: ${theme.spacings.medium};
    bottom: ${theme.spacings.medium};
    z-index: ${theme.layers.menu};
    color: ${theme.colors.white};
  `}
`

export const FeedbackWrapper = styled.blockquote`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const AuthorAvatar = styled.img`
  ${({ theme }) => css`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    margin-right: ${theme.spacings.xsmall};
    box-shadow: 0 0 0 0.15rem ${theme.colors.white};

    ${media.greaterThan('medium')`
      width: 4rem;
      height: 4rem;
      margin-right: ${theme.spacings.small};
    `}
  `}
`

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthorName = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-bottom: 0.2rem;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const AuthorLocation = styled.span`
  ${({ theme }) => css`
    font-size: 1rem;
    font-weight: ${theme.font.light};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`
