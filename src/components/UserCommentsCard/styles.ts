import styled, { css } from 'styled-components';
import { UserCommentsCardProps } from '.';

type WrapperProps = Pick<UserCommentsCardProps, 'backgroundImage'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, backgroundImage }) => css`
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: ${theme.border.radius};
  `}
`;

export const SocialCardWrapper = styled.div``;
