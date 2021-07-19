import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { CallOutProps } from '.'

type WrapperProps = Pick<CallOutProps, 'imageDirection'>

const wrapperModifiers = {
  left: (theme: DefaultTheme) => css`
    grid-template-areas: 'content';
    grid-template-columns: 1fr;

    ${media.greaterThan('medium')`
      grid-template-areas: 'image content';
      grid-template-columns: 1fr 2fr;
    `}

    ${Image} {
      border-bottom-left-radius: ${theme.border.radius};
      border-top-left-radius: ${theme.border.radius};

      mask-image: url('/img/layout/waves-right.svg');
    }

    ${ShapePrimary} {
      top: -1.5rem;
      right: -2.5rem;
      transform: scaleX(-1);
    }

    ${ShapeSecondary} {
      bottom: -3rem;
      left: -4rem;
      transform: scaleX(-1);
    }

    ${ShapeSemiCircle} {
      bottom: 4rem;
      left: 5%;
      transform: scaleX(-1);
    }

    ${ShapeCircle} {
      top: 2rem;
      left: 20%;
    }
  `,

  right: (theme: DefaultTheme) => css`
    grid-template-areas: 'content';
    grid-template-columns: 1fr;

    ${media.greaterThan('medium')`
      grid-template-areas: 'content image';
      grid-template-columns: 2fr 1fr;
    `}

    ${Image} {
      border-bottom-right-radius: ${theme.border.radius};
      border-top-right-radius: ${theme.border.radius};

      mask-image: url('/img/layout/waves-left.svg');
    }

    ${ShapePrimary} {
      top: -1.5rem;
      left: -2.5rem;
    }

    ${ShapeSecondary} {
      bottom: -3rem;
      right: -4rem;
    }

    ${ShapeSemiCircle} {
      bottom: 4rem;
      right: 5%;
    }

    ${ShapeCircle} {
      top: 2rem;
      right: 20%;
    }
  `
}

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, imageDirection }) => css`
    display: grid;
    position: relative;
    min-height: 30rem;

    background-color: ${theme.colors.backgroundGray};
    border-radius: ${theme.border.radius};

    ${!!imageDirection && wrapperModifiers[imageDirection](theme)}
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.84rem 4rem;

    color: ${theme.colors.gray};
    z-index: ${theme.layers.base};

    ${media.greaterThan('small')`
      padding: 2.3rem 5rem;
    `}

    ${media.greaterThan('medium')`
      padding: 5.6rem 10rem;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.xl};
    font-weight: ${theme.font.regular};
    line-height: 3.4rem;

    padding-bottom: ${theme.spacings.xs};
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.base};
    font-weight: ${theme.font.regular};
    line-height: 2.4rem;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.lg};
  `}
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
`

export const Image = styled.img`
  grid-area: image;
  width: 100%;
  height: 100%;
  max-width: 41.8rem;

  object-fit: cover;
  mask-repeat: repeat-y;
  mask-size: contain;
  mask-position: top;
`

export const Details = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Shape = styled.img`
  position: absolute;
`

export const ShapePrimary = styled(Shape)`
  ${media.lessThan('medium')`
     width: 5rem;
  `}

  ${media.lessThan('small')`
     width: 4rem;
  `}
`

export const ShapeSecondary = styled(Shape)`
  ${media.lessThan('medium')`
     width: 9rem;
  `}

  ${media.lessThan('small')`
     width: 8rem;
  `}
`

export const ShapeSemiCircle = styled(Shape)`
  ${media.lessThan('large')`
     width: 13rem;
  `}
`

export const ShapeCircle = styled.span`
  width: 6rem;
  height: 6rem;
  display: block;
  position: absolute;

  background: white;
  border-radius: 100%;

  ${media.greaterThan('large')`
    width: 8rem;
    height: 8rem;
  `}
`
