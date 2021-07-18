import styled from 'styled-components';

export const Content = styled.main`
  width: calc(100% - 90px);
  margin: 0 auto;
  padding: 50px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 15px;
    width: calc(100% - 30px);
  }
`;
