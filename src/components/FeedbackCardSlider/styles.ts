import styled from "styled-components";

export const Wrapper = styled.section`
  /* Padrao slick slider*/

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: block;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;
    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }
  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  /*Alterado prev e next*/
  .slick-prev,
  .slick-next {
    display: block;
    color: blue;
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 8.3rem;
    height: 8.3rem;
    padding: 5rem;
    padding: 0;
    transform: translate(0, -50%);
    background-color: white;
    z-index: 60;
  }
  .slick-prev {
    left: -4.1rem;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;

    svg {
      width: 20px;
      margin-top: 3.1rem;
      margin-left: 4.4rem;
    }
  }
  .slick-next {
    right: -4.1rem;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;

    svg {
      width: 20px;
      margin-top: 3.1rem;
      margin-left: 1.5rem;
    }
  }
  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    visibility: hidden;
  }

  .slick-track,
  .slick-list {
    display: flex;
  }
  .slick-slide > div {
    margin: 0 0.8rem;
    flex: 1 0 auto;
    height: 100%;
  }
  .slick-list {
    margin: 0 -0.8rem;
  }

  /*Alterado dots*/

  .slick-dots {
    list-style: none;
    display: flex !important;
    align-items: center;
    justify-content: center;
    margin-top: 2.4rem;
    li {
      background: lightgray;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.8rem;
      cursor: pointer;
      &.slick-active {
        background: blue;
      }
    }
    button {
      opacity: 0;
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
    }
  }
`;
