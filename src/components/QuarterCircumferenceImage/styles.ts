import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 17.2rem;
    height: 10.5rem;
  `}
`;
