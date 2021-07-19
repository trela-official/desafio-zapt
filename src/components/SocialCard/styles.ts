import styled, { css } from 'styled-components';
import { SocialCardProps } from '.';

type WrapperProps = Pick<SocialCardProps, 'transparent' | 'maxSizeCard'>;

const isTransparent = (condition: boolean, color: string) =>
  condition ? 'transparent' : color;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, transparent, maxSizeCard }) => css`
    max-width: ${maxSizeCard ? '46rem' : '38rem'};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background: ${isTransparent(transparent!, theme.colors.gradients.lightBg)};
    break-inside: avoid;
  `}
`;
export const UserInformation = styled.div``;
export const Comment = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
  `}
`;
