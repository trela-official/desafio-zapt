import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

type StyledHeadingProps = Pick<HeadingProps, 'size'>;

const headingModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 3.3rem;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: 3.6rem;
  `,
};

export const Heading = styled.h1<StyledHeadingProps>`
  ${({ theme, size }) => css`
    ${!!size && headingModifiers[size](theme)}
  `}
`;
