import styled, { css } from 'styled-components';
import { UserCommentsCardProps } from '.';

type WrapperProps = Pick<UserCommentsCardProps, 'backgroundImage'>;

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, backgroundImage }) => css`
    width: 100%;
    height: 40rem;
    background: url(${backgroundImage}) no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: ${theme.border.radius};
    position: relative;
  `}
`;

export const SocialCardWrapper = styled.div`
  z-index: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;
