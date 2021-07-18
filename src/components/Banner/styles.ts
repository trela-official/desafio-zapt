import styled, { css } from 'styled-components'
import Layouts from 'layouts'

export const Container = styled(Layouts.Row)`
  ${({ theme }) => css`
    background-color: ${theme.colors.grayLight};
  `}
  min-height: 31.3rem;
  position: relative;
`

export const ImgPinkBalloon = styled.img`
  display: none;
  position: absolute;
  left: -2.5rem;
  top: -2rem;

  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeInMove('0', '-30px', '0')} 0.8s ease
      forwards;

    ${theme.breakPoint(800)} {
      display: block;
    }
  `}
`

export const ImgPurpleBalloon = styled.img`
  display: none;
  position: absolute;
  right: -4.5rem;
  bottom: -3rem;

  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeInMove('0', '30px', '0')} 0.8s ease
      forwards;

    ${theme.breakPoint(800)} {
      display: block;
    }
  `}
`

export const Row = styled(Layouts.Row)`
  flex-direction: column-reverse;

  ${({ theme }) => theme.breakPoint(800)} {
    flex-direction: row;
  }
`

export const WrapperInfo = styled(Layouts.Col)`
  width: auto;
  justify-content: center;
  padding: 2rem;

  ${({ theme }) => theme.breakPoint(600)} {
    padding: 3rem 5rem;
  }

  ${({ theme }) => theme.breakPoint(998)} {
    padding: 6rem 10rem;
  }
`

export const Title = styled(Layouts.Col)`
  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeInMove('0', '-40px', '0')} 0.8s ease
      forwards 0.2s;
    font-size: ${theme.font.sizes.xLarge};
    font-weight: ${theme.font.bold};
  `}
`

export const Description = styled(Layouts.Col)`
  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeInMove('0', '30px', '0')} 0.8s ease
      forwards 0.2s;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
  `}
  line-height: 1.5;
  padding: 1.2rem 0;
`

export const Question = styled(Layouts.Col)`
  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeInMove('30px', '0', '0')} 0.8s ease
      forwards 0.4s;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
  `}
  padding: 1rem 0 1.5rem 0;
`

export const BtnGroup = styled(Layouts.Row)`
  gap: 1.6rem;
  flex-wrap: wrap;

  ${({ theme }) => css`
    .btn0 {
      opacity: 0;
      animation: ${theme.animations.fadeInMove('0', '30px', '0')} 0.8s ease
        forwards 0.7s;
    }

    .btn1 {
      opacity: 0;
      animation: ${theme.animations.fadeInMove('0', '30px', '0')} 0.8s ease
        forwards 0.9s;
    }
  `}
`

export const WrapperImg = styled(Layouts.Row)`
  position: relative;
  width: 100%;
  min-width: initial;
  max-width: initial;
  aspect-ratio: 1/0.8;

  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeIn} 2s ease forwards;

    ${theme.breakPoint(800)} {
      min-width: 43.3rem;
      max-width: 43.3rem;
    }
  `}

  & > div {
    position: initial !important;
  }

  img {
    object-fit: cover;
  }
`

export const Waves = styled.svg`
  display: none;
  background-image: url(${'/imgs/waves.svg'});
  background-repeat: no-repeat;
  background-position: -0.2rem 0;
  background-size: contain;
  position: absolute;
  left: 0;
  bottom: 0;

  ${({ theme }) => theme.breakPoint(800)} {
    display: flex;
    height: 100%;
  }
`

export const Footer = styled(Layouts.Row)`
  margin-top: 2rem;
  padding: 0 2rem 3rem 2rem;

  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeInMove('30px', '0', '0')} 0.8s ease
      forwards 1.1s;

    ${theme.breakPoint(800)} {
      padding: 0 0 3rem 0;
    }
  `}
`
