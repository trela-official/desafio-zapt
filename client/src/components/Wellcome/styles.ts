import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-top: ${theme.spacings.xxlarge};
    position: relative;

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}
  `}
`

export const ElementSmall = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: -${theme.spacings.small};
    top: -${theme.spacings.small};
  `}
`
export const TextContainer = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 10rem;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xxlarge} 5rem;
    `}
  `}
`
export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
  `}
`
export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    line-height: ${theme.spacings.small};
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.small};
  `}
`
export const ContentCTA = styled.div``
export const TitleCTA = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
export const ImageContainer = styled.section`
  position: relative;
`
export const ElementCircle = styled.div`
  ${({ theme }) => css`
    top: ${theme.spacings.xsmall};
    left: ${theme.spacings.xxlarge};
    position: absolute;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`
export const ElementCurve = styled.div`
  ${({ theme }) => css`
    bottom: ${theme.spacings.xxlarge};
    right: ${theme.spacings.xxlarge};
    position: absolute;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const ElementBig = styled.div`
  ${({ theme }) => css`
    bottom: -${theme.spacings.small};
    right: -${theme.spacings.small};
    position: absolute;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

export const TextInfo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin-top: ${theme.spacings.xsmall};

    a {
      color: ${theme.colors.blueDark};
      text-text-decoration: underline;
      margin-left: 0.2rem;
      transition: ${theme.transition.default};

      &:hover {
        color: ${theme.colors.secondary};
      }
    }

    ${media.lessThan('medium')`
      margin: ${theme.spacings.xlarge} 0;
    `}
  `}
`
