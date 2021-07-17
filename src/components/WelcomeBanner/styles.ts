import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 120rem;
  height: 31.3rem;
  background-color: #fafafa;
  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5.6rem 0 5.6rem 10rem;
`;

export const Presentation = styled.div`
  h1 {
    font-weight: bold;
    font-size: 2.8rem;
    margin-bottom: 8px;
  }

  p {
    font-size: 1.6rem;
    color: #7b7b7b;
  }
`;

export const ActionsWrapper = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1.2rem;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  button:first-child {
    margin-right: 1.6rem;
  }
`;
