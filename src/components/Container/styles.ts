import styled from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 4rem;

  ${ButtonStyles.Wrapper} + ${ButtonStyles.Wrapper} {
    margin-left: 0.8rem;
  }
`;
