import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    height: 100vh;
    width: 100%;
  `}
`;
