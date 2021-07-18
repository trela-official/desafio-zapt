import styled, { css } from 'styled-components'

export const TitleSection = styled.h1`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  padding: 0 2rem;

  ${({ theme }) => css`
    opacity: 0;
    animation: ${theme.animations.fadeInMove('0', '-40px', '0')} 0.6s ease
      forwards;
    font-size: ${theme.font.sizes.xLarge};
    font-weight: ${theme.font.normal};

    ${theme.breakPoint(800)} {
      font-size: ${theme.font.sizes.xxLarge};
    }
  `}
`
