import styled from "styled-components";

export const Wrapper = styled.div`
  width: 120rem;
  margin: auto;

  h1 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 4.8rem;
  }
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  height: 63.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const CommentColumn = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2.4rem;
`;
