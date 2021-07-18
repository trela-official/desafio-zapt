import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.15rem solid ${theme.colors.white};
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-left: 1.6rem;
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
  `}
`;

export const City = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
  `}
`;
