import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const Container = styled(Layouts.Container)`
  margin: 2rem auto;

  ${({ theme }) => theme.breakPoint(800)} {
    margin: 12rem auto;
  }
`

export const ContainerCarousel = styled(Layouts.Col)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    ${theme.breakPoint(800)} {
      margin-top: ${theme.spacings.xtreme};
    }
  `}
`
