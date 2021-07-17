import styled, { css } from "styled-components";

import { HeadingProps } from ".";

export const Wrapper = styled("h1").attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
  `}
`;
