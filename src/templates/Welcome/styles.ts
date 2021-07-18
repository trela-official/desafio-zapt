import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import Button from 'components/Button';
import Teardrop from 'components/Teardrop';

export const MainContentContainer = styled.main`
  ${({ theme }) => css`
    position: relative;
    margin-top: 8rem;
    background-color: ${theme.colors.darkenBackground};
    border-radius: ${theme.border.radius};
    display: grid;
    grid-template-columns: 1fr;

    ${media.greaterThan('large')`
      margin-top: 12rem;
      grid-template-columns: 2fr 1fr;
    `}
  `}
`;

export const TopTeardrop = styled(Teardrop)`
  ${({ theme }) => css`
    position: absolute;
    z-index: ${theme.layers.base};
    top: -1.9rem;
    left: -1rem;

    ${media.greaterThan('large')`
      left: -2.5rem;
    `}
  `}
`;

export const BottomTeardrop = styled(Teardrop)`
  ${({ theme }) => css`
    position: absolute;
    z-index: ${theme.layers.base};
    right: -1rem;
    bottom: -3rem;

    ${media.greaterThan('large')`
      right: -4.3rem;
    `}
  `}
`;

export const InfoContentContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.xlarge} 0 ${theme.spacings.medium};

    ${media.greaterThan('large')`
      width: 75%;
      padding: 0;
    `}
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: 0.8rem;
    color: ${theme.colors.gray};
  `}
`;

export const BoldText = styled.b`
  ${({ theme }) => css`
    margin-top: 2.4rem;
    color: ${theme.colors.black};
    font-weight: ${theme.font.medium};
  `}
`;

export const ActionsContainer = styled.div`
  margin-top: 0.6rem;

  ${media.greaterThan('large')`
    margin-top: 1.2rem;
  `}
`;

export const ActionButton = styled(Button)`
  &:not(:first-of-type) {
    margin-top: 0.4rem;

    ${media.greaterThan('medium')`
      margin-top: 0rem;
      margin-left: 1.6rem;
    `}
  }
`;

export const FooterContent = styled.div`
  margin-top: 3.6rem;

  ${media.greaterThan('medium')`
    margin-top: 0rem;
  `}
`;
