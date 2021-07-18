import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const Container = styled(Layouts.Container)`
  margin: 2rem auto;

  ${({ theme }) => theme.breakPoint(800)} {
    margin: 12rem auto;
  }
`

export const GridSocialComments = styled.div`
  columns: 1;
  width: 100%;

  ${({ theme }) => css`
    & > div:nth-child(odd) {
      opacity: 0;
      animation: ${theme.animations.fadeInMove('30px', '0', '0')} 1s ease
        forwards;
    }

    & > div:nth-child(even) {
      opacity: 0;
      animation: ${theme.animations.fadeInMove('0', '30px', '0')} 1s ease
        forwards;
    }

    gap: ${theme.spacings.large};
    margin-top: 0;

    ${theme.breakPoint(470)} {
      columns: 2;
    }

    ${theme.breakPoint(644)} {
      columns: 3;
      gap: ${theme.grid.gutter};
    }

    ${theme.breakPoint(800)} {
      margin-top: ${theme.spacings.large};
    }
  `}
`
