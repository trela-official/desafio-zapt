import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 50px auto;
  width: 100%;
  max-width: 1200px;
`;
export const Container = styled.div`
  width: 100%;
  .hidde {
    transition: all 0.175s ease-in-out;
    opacity: 0;
  }
  .swiper-wrapper {
    height: 400px;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    width: 6px;
    height: 6px;
    background: rgba(1, 31, 187, 0.08);
    transition: all 0.175s ease-in-out;
    &:hover {
      background: var(--color-main);
      opacity: 0.5;
    }
  }
  .swiper-pagination-bullet-active {
    background: var(--color-main);
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 33%;
    background-color: var(--color-light);
    width: 83px;
    height: 83px;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    &::after {
      margin: 0;
      padding: 0;
      display: flex;
      position: absolute;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;
      font: unset;
    }
    @media (max-width: 992px) {
      display: none;
    }
  }
  .swiper-button-next {
    right: -41px;
    &::after {
      content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNjI1IDEuMjVMOC4zNzUgOEwxLjYyNSAxNC43NSIgc3Ryb2tlPSIjMDExRkJCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);
      left: -10px;
      top: 2px;
      font: unset;
    }
  }
  .swiper-button-prev {
    opacity: 0;
    left: -41px;
    &::after {
      content: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxMCAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuNjI1IDEuMjVMOC4zNzUgOEwxLjYyNSAxNC43NSIgc3Ryb2tlPSIjMDExRkJCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K);
      right: -10px;
      bottom: 2px;
      transform: rotate(180deg);
    }
  }
  .swiper-button-disabled {
    opacity: 0;
    transition: all 0.175s ease-in-out;
  }
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 48px;
  @media (max-width: 992px) {
    text-align: left;
  }
`;
export const Item = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
`;
export const BgImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  img {
    border-radius: 8px;
  }
`;
export const NoiseOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  img {
    border-radius: 8px;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(112.99% 451.94% at 0% 100%, #000000 0%, rgba(0, 0, 0, 0) 100%);
  opacity: 0.7;
  z-index: 3;
  border-radius: 8px;
  @media (max-width: 675px) {
    background: rgba(0, 0, 0, 0.8);
  }
`;
export const ItemProfile = styled.div`
  position: relative;
  z-index: 4;
  height: calc(100% - 24px);
  max-width: 460px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 15px 24px 24px;
`;
export const Testimony = styled.h3`
  color: var(--color-light);
  font-size: 1.25rem;
  line-height: 26px;
  letter-spacing: -0.01em;
  margin-bottom: 17px;
`;
export const Details = styled.div`
  color: var(--color-light);
  display: flex;
`;
export const Image = styled.div`
  margin-right: 16px;
`;
export const Customer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.h4`
  margin: 0 0 2px 0;
  font-size: 1rem;
  line-height: 20px;
  letter-spacing: -0.01em;
`;
export const Address = styled.div`
  display: flex;
  font-size: 0.75rem;
  line-height: 16px;
  letter-spacing: -0.01em;
  color: var(--color-light);
  opacity: 0.8;
  span {
    margin: 0 5px;
  }
  p {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
    line-height: inherit;
  }
`;
