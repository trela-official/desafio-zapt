import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const Container = styled(Layouts.Col)`
  margin: 2rem auto;
  padding: 0;
  max-width: 35rem;

  ${({ theme }) => theme.breakPoint(800)} {
    margin: 12rem auto;
    padding: 0 2rem;
  }
`

export const BtnGroup = styled(Layouts.Col)`
  ${({ theme }) => css`
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.xtreme};
    padding: 0 ${theme.spacings.large};

    .btn1 {
      opacity: 0;
      animation: ${theme.animations.fadeInMove('0', '30px', '0')} 0.3s linear
        forwards 0.2s;
    }

    .btn2 {
      opacity: 0;
      animation: ${theme.animations.fadeInMove('0', '30px', '0')} 0.3s linear
        forwards 0.4s;
    }

    .btn3 {
      opacity: 0;
      animation: ${theme.animations.fadeInMove('0', '30px', '0')} 0.3s linear
        forwards 0.6s;
    }
  `}
  align-items: center;
`

export const LinkBtn = styled.a`
  display: flex;
  width: 100%;
`
