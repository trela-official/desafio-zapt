import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const WrapperBanner = styled(Layouts.Row)`
  overflow: hidden;
`

export const Container = styled(Layouts.Container)`
  margin: 0 auto;
  padding: 0;

  ${({ theme }) => theme.breakPoint(800)} {
    margin: 12rem auto;
    padding: 0 2rem;
  }
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};
  `}
  line-height: 1.5;
`

export const LinkZap = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    text-decoration-line: underline;
    padding-left: 0.5rem;
    border: 0.1rem dashed transparent;

    &:focus {
      border: 0.1rem dashed ${theme.colors.gray};
      border-radius: ${theme.border.radius};
    }
  `}
`
