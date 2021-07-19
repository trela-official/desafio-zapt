import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    width: 100%;
    max-width: 58.8rem;
    height: 40rem;
    border-radius: ${theme.border.radius};
    background: ${theme.colors.drWhite};
    overflow: hidden;
    transition: all 0.3s;

    ::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: radial-gradient(
          112.99% 451.94% at 0% 100%,
          rgba(0, 0, 0, 0.7) 0%,
          rgba(0, 0, 0, 0) 100%
        ),
        url('/img/noise-overlay.png');

      z-index: ${theme.layers.base};
    }

    :hover {
      transform: scale(1.005);
    }

    :hover ${WrapperTestimonial} > span {
      transform: scale(1.02);
    }

    @media (max-width: 450px) {
      height: 30rem;
    }
  `}
`

export const Thumbnail = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
`

export const WrapperTestimonial = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: ${theme.layers.alwaysOnTop};
    color: ${theme.colors.white};

    padding: ${theme.spacings.small};

    max-width: 460px;

    > span {
      display: block;
      font-size: ${theme.font.sizes.large};
      line-height: calc(${theme.spacings.small} + 0.2rem);

      letter-spacing: -0.01em;

      transition: all 0.3s;

      ::after {
        content: '”';
      }

      ::before {
        content: '“';
      }
    }
  `}
`

export const WrapperUser = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-areas: 'avatar name' 'avatar city';

    grid-template-columns: 40px auto;
    column-gap: ${theme.spacings.xsmall};

    margin-top: ${theme.spacings.xsmall};

    color: ${theme.colors.white};

    p {
      grid-area: name;

      font-size: ${theme.font.sizes.medium};
      letter-spacing: -0.01em;

      color: currentColor;
    }

    span {
      grid-area: city;

      font-size: ${theme.font.sizes.xsmall};
      opacity: 0.8;
      letter-spacing: -0.01em;
    }
  `}
`

export const Avatar = styled.div`
  ${({ theme }) => css`
    grid-area: avatar;
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 100%;
    overflow: hidden;

    border: 1.5px solid ${theme.colors.white};

    img {
      margin-left: -2px !important;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`
