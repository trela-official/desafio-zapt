import styled, { css } from 'styled-components';
import * as ButttonStyles from '../Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 50rem;
    padding: ${theme.spacings.medium} 0;
  `}
`;
export const Form = styled.form`
  background: none;
  width: 100%;
`;
export const Box = styled.div`
  width: 100%;

  ${ButttonStyles.Button} {
    margin-top: 1.5rem;
  }
`;
