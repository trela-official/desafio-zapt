import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 192rem;
  margin: 0 auto;
  padding: 0 1.6rem;

  align-items: center;
`;
export const Image = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    height: 100vh;
  }
`;
