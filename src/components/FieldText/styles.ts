import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    height: 3.5rem;
    border: 0.2rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;
