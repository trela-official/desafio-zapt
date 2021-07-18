import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 0.15rem solid ${theme.colors.white};

    ${media.greaterThan('small')`
      width: 4rem;
      height: 4rem;
    `}
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
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const City = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.normal};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`;
