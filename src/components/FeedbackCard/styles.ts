import styled from "styled-components";

export const Wrapper = styled.div`
  width: 58.8rem;
  height: 40rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: 0.4;
  }
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  padding: 0 2.4rem 2.4rem 2.4rem;
  z-index: 60;

  p {
    font-size: 2rem;
    color: #fff;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  color: white;
  margin-top: 1.6rem;

  img {
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 2px solid white;
    margin-right: 1.6rem;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
`;
