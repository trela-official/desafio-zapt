import styled, { css } from 'styled-components';

import * as HeadingStyles from '../../components/TextComponents/Heading/styles';
import * as TypographyStyles from '../../components/TextComponents/Typography/styles';
import * as ButtonStyles from '../../components/Button/styles';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    > ${TypographyStyles.Text} {
      display: block;
      margin-top: ${theme.spacings.xsmall};

      span {
        text-decoration: underline;
        color: ${theme.colors.primary};
      }
    }
  `}
`;
export const DropRed = styled.div`
  position: absolute;
  top: -2rem;
  left: -2rem;
`;
export const DropBlue = styled.div`
  position: absolute;
  bottom: -3rem;
  right: -3rem;
`;
export const Image = styled.img``;

export const CardWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.bacgrounCard};
    max-width: 120rem;
    display: flex;
    position: relative;
  `}
`;
export const Content = styled.div`
  padding: 5.6rem 8rem;
  flex: 1;
`;
export const ContentLinks = styled.div`
  ${({ theme }) => css`
    > ${TypographyStyles.Text} {
      display: block;
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;
export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    ${ButtonStyles.Wrapper} + ${ButtonStyles.Wrapper} {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
export const ContentText = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
    ${HeadingStyles.Heading}, ${TypographyStyles.Text} {
      display: block;
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;
export const ImageWrapper = styled.div`
  flex: 0.6;
`;
