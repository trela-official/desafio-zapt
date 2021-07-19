import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';
import * as TypographyStyles from 'components/TextComponents/Typography/styles';

export const Wrapper = styled.div``;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};

    ${TypographyStyles.Text} {
      display: block;
      margin-top: ${theme.spacings.xxsmall};
    }
  `}
`;
export const LinksWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.small};

    ${ButtonStyles.Wrapper} {
      max-width: 20rem;
      width: 100%;
    }

    ${ButtonStyles.Wrapper} + ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.xsmall};
    }
  `}
`;
