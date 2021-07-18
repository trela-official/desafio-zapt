import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  max-width: 58.8rem;
  max-height: 40rem;
  position: relative;
`;

export const Image = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    width: 100%;
    height: 100%;
    filter: brightness(70%);
  `}
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 2.4rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Comment = styled.p`
  ${({ theme }) => css`
    width: 85%;
    margin-bottom: 1.6rem;
    font-size: ${theme.font.sizes.xsmall};

    ${media.greaterThan('small')`
      font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`;

export const Quote = styled.q`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
