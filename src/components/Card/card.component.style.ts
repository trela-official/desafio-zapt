import styled, { css, DefaultTheme } from 'styled-components'

import { CardProps } from './card.model'

const wrapperModifier = {
  hasBackgroundImage: (src: string) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    background: url(${src}) no-repeat center center;
    width: 58.8rem;
    height: 40rem;
  `,
  noGutter: (theme: DefaultTheme, noGutter: boolean) => css`
    padding: ${noGutter
      ? 0
      : `${theme.spacings.xsmall} ${theme.spacings.small}`};
  `
}

export const Wrapper = styled.section<CardProps>`
  ${({ theme, noGutter, color, src }) => css`
    border-radius: ${theme.border.radius};
    background-color: ${color
      ? theme.colors[color]
      : theme.colors.primaryxlight};
    ${!!src && wrapperModifier.hasBackgroundImage(src)};
    ${wrapperModifier.noGutter(theme, !!noGutter)};
  `}
`
