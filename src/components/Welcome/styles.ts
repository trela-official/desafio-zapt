import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

import * as SubtitleWithLinkStyles from 'components/SubtitleWithLink/styles'

const customMedia = generateMedia({
  large: '956px',
  medium: '695px',
  small: '500px'
})

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;

    ${customMedia.lessThan('medium')`
      ${SubtitleWithLinkStyles.Wrapper} {
        margin-left: ${theme.spacings.large};
        margin-right: ${theme.spacings.large};
      }
    `}
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.lightGray};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const BorderTopImage = styled.img`
  position: absolute;
  top: -3rem;
  left: -2rem;
  width: 6.2rem;
  height: 6.2rem;

  ${customMedia.lessThan('medium')`
    display: none;
  `}
`

export const BorderBottomImage = styled.img`
  position: absolute;
  bottom: -3rem;
  right: -2rem;
  width: 10rem;
  height: 10rem;

  ${customMedia.lessThan('medium')`
    display: none;
  `}
`

export const HeroWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxxlarge} 10rem;

    ${customMedia.lessThan('medium')`
      padding: ${theme.spacings.medium} 3rem;
    `}
  `}
`

export const WelcomeImageWrapper = styled.div`
  background-image: url('/img/happy-people-image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #fafafa;
  width: 42rem;

  ${customMedia.lessThan('large')`
    display: none;
  `}

  &:before {
    content: '';
    width: 1.7rem;
    top: 0;
    bottom: 0;
    position: absolute;
    background-position: 0 50%;
    background-size: 20px 40px;
    background-repeat: repeat-y;
    background-image: radial-gradient(
      circle at 10px -25px,
      transparent 20px,
      #fafafa 21px
    );
  }

  &:after {
    content: '';
    position: absolute;
    width: 3rem;
    top: 0;
    bottom: 0;
    background-size: 40px 40px;
    background-repeat: repeat-y;
    background-image: radial-gradient(
      circle at 4px 26px,
      #fafafa 20px,
      transparent 21px
    );
  }
`

export const Circle = styled.div`
  background-image: url('/img/circle.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 8rem;
  height: 8rem;
  margin-top: 1.6rem;
  margin-left: 8rem;
`

export const Ellipse = styled.div`
  ${({ theme }) => css`
    background-image: url('/img/ellipse.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 17.2rem;
    height: 10.5rem;
    margin: 7.5rem ${theme.spacings.xlarge} 3.7rem auto;
  `}
`
