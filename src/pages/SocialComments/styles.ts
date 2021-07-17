import styled, { css } from 'styled-components';
import * as SocialCardStyles from '../../components/SocialCard/styles';

export const Wrapper = styled.div`
  max-width: 120rem;
`;
export const TextWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    margin-bottom: ${theme.spacings.xlarge};
  `}
`;
export const CommentsWrapper = styled.div`
  ${({ theme }) => css`
    columns: 3;
    column-gap: ${theme.spacings.small};

    ${SocialCardStyles.Wrapper} + ${SocialCardStyles.Wrapper} {
      margin-top: ${theme.spacings.small};
    }
  `}
`;
