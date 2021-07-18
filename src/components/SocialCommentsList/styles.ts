import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    column-count: 1;
    column-gap: ${theme.spacings.xsmall};

    ${media.greaterThan('small')`
      column-count: 2;
      column-gap: ${theme.spacings.small};
    `}

    ${media.greaterThan('medium')`
      column-count: 3;
    `}
  `}
`;

export const SocialCommentItem = styled.li`
  ${({ theme }) => css`
    max-width: 38.4rem;
    margin: 0;
    display: flex;
    margin-bottom: ${theme.spacings.xsmall};
    break-inside: avoid;

    ${media.greaterThan('small')`
      column-count: 2;
      margin-bottom: ${theme.spacings.small};
    `}
  `}
`;
