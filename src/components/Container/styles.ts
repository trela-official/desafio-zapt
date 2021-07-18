import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 90%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
  `}
`;
