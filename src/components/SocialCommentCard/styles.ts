import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.bluishBackground};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`;

export const Comment = styled.q`
  ${({ theme }) => css`
    color: ${theme.colors.primaryDarken};
    font-weight: ${theme.font.normal};
  `}
`;

export const AuthorInfoContent = styled.footer`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
  `}
`;

export const AuthorAvatar = styled.img`
  ${({ theme }) => css`
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    background-color: ${theme.colors.primaryDarken};
    border: 0.15rem solid ${theme.colors.primaryDarken};
  `}
`;

export const AuthorNickname = styled.p`
  ${({ theme }) => css`
    margin-left: calc(${theme.spacings.xsmall} - 0.4rem);
  `}
`;
