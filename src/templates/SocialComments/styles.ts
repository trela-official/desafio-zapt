import styled, { css } from 'styled-components';

import { Wrapper as StylesContainer } from 'components/Container/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${StylesContainer} {
      margin-bottom: ${theme.spacings.xxlarge};
    }
  `}
`;

export const TitleContainer = styled.div`
  margin-top: 8rem;
  margin-bottom: 4.8rem;
  text-align: center;
`;
