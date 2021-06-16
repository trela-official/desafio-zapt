import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    border: 0;
    background: ${theme.colors.white};
    padding: 0 ${theme.spacings.small};
    height: 3.5rem;
    border-radius: ${theme.border.radius};
    cursor: pointer;

    font-size: ${theme.font.sizes.medium};
  `}
`;
