import styled from "styled-components";

export const FeedbacksContainer = styled.div`
  height: 590px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedbacksTitle = styled.h1`
  margin: 40px 0;
  font-weight: 100;
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 90%;

  .rec.rec-arrow {
    background: #fff;
    border: none;
    box-shadow: 0px 0px 2px 1px #011fbb;
    color: #445cd4;
  }

  .rec.rec-arrow:hover {
    color: #011fbb;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec-dot_active {
    background-color: #011fbb;
    box-shadow: none;
  }

  .rec-dot {
    width: 8px;
    height: 8px;
  }
`;
