import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 38rem;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background: ${theme.colors.gradients.lightBg};
    border-radius: ${theme.border.radius};
  `}
`;
export const UserInformation = styled.div``;
export const Comment = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;
