import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primaryLight};
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border: 0;
    border-radius: ${theme.border.radius};
    cursor: pointer;
  `}
`;
