import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 120rem;
`;
export const SliderWrapper = styled.div``;
export const TextWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    margin-bottom: ${theme.spacings.xlarge};
  `}
`;
