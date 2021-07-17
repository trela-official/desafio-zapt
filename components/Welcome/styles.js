import styled from 'styled-components';

export const DropImg = styled.div`
  position: absolute;
  top: ${props => props.top ? "-20px" : "unset"};
  left: ${props => props.left ? "-25px" : "unset"};
  right: ${props => props.right ? "-45px" : "unset"};
  bottom: ${props => props.bottom ? "-35px" : "unset"};
  @media (max-width: 1024px){
    display: none;
  }
`
export const Wrapper = styled.div`
  width: calc(100% - 90px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
export const Container = styled.div`
  background-color: var(--color-neutral);
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 17px;
`
export const WelcomeUser = styled.div`
  padding: 0 95px;
  width: 100%;
  @media (max-width: 1024px){
    padding: 15px 30px;
  }
`;
export const Texts = styled.div`
  padding-top: 15px;
`
export const BackgroundImg = styled.div`
  display: flex;
  img{
    border-radius: 4px;
  }
  @media (max-width: 1024px){
    display: none;
  }
`;
export const Title = styled.h1`
  margin-bottom: 10px;
`;
export const Description = styled.p`
  color: var(--color-neutral-dark);
  margin-bottom: 24px;
`;
export const Choose = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  p{
    color: var(--color-dark);
    font-weight: 500;
    margin-bottom: 12px;
  }
`
export const Links = styled.div`
  display: flex;
  a { 
    margin-right: 16px;
  }
  @media (max-width: 575px){
    flex-direction: column;
    a { 
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`
