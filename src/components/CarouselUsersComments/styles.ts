import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const Wrapper = styled(Layouts.Col)`
  opacity: 0;
  animation: ${({ theme }) => theme.animations.fadeInMove('0', '30px', '0')}
    0.8s ease forwards;

  .slick-list,
  .slick-slider,
  .slick-track {
    position: relative;
    display: block;
  }

  .slick-loading .slick-slide,
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slider {
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
    overflow: hidden;
    height: 46rem;
  }

  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .slick-list:focus {
    outline: 0;
  }

  .slick-list.dragging {
    cursor: pointer;
  }

  .slick-slider .slick-list,
  .slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    top: 0;
    left: 0;
  }

  .slick-track:after,
  .slick-track:before {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
    padding: 0 10px;
  }

  .slick-list {
    margin: 0 -1rem;
  }

  [dir='rtl'] .slick-slide {
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

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots,
  .slick-next,
  .slick-prev {
    position: absolute;
    display: block;
    padding: 0;
  }

  .slick-next,
  .slick-prev {
    font-size: 0;
    line-height: 0;
    top: calc(50% - 3rem);
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: 0;
    background-color: rgba(255, 255, 255, 0.73);
    width: 4.1rem;
    height: 8.2rem;
    transition: background-color 0.2s linear;
    opacity: 0.3;
  }

  .slick-slider:hover .slick-next,
  .slick-slider:hover .slick-prev {
    opacity: 1;
  }

  .slick-next:focus,
  .slick-next:hover,
  .slick-prev:focus,
  .slick-prev:hover {
    color: transparent;
    outline: 0;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
  }

  .slick-next:focus:before,
  .slick-next:hover:before,
  .slick-prev:focus:before,
  .slick-prev:hover:before {
    opacity: 1;
  }

  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before,
  .slick-arrow.slick-prev.slick-disabled,
  .slick-arrow.slick-next.slick-disabled {
    display: none !important;
  }

  .slick-next:before,
  .slick-prev:before {
    line-height: 1;
    opacity: 0.75;
  }

  .slick-prev {
    z-index: ${({ theme }) => theme.layers.base};
    left: 0;
    border-radius: 0 4rem 4rem 0;
  }

  [dir='rtl'] .slick-prev {
    right: -25px;
    left: auto;
  }

  .slick-prev:before {
    content: url(${'/imgs/arrow-left.svg'});
  }

  .slick-next:before,
  [dir='rtl'] .slick-prev:before {
    content: url(${'/imgs/arrow-right.svg'});
  }

  .slick-next {
    z-index: ${({ theme }) => theme.layers.base};
    right: 0;
    border-radius: 4rem 0 0 4rem;
  }

  [dir='rtl'] .slick-next {
    right: auto;
    left: -25px;
  }

  .slick-dotted.slick-slider {
    margin-bottom: 3rem;
  }

  .slick-dots {
    opacity: 0;
    animation: ${({ theme }) => theme.animations.fadeInMove('0', '30px', '0')}
      0.8s ease forwards;
    margin-top: ${({ theme }) => theme.spacings.xxxLarge};
    width: 100%;
    list-style: none;
    text-align: center;
  }

  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin: 0 0.5rem;
    padding: 0;
    cursor: pointer;
  }

  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    padding: 0.5rem;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    margin: auto;

    ${({ theme }) => css`
      background-color: ${theme.colors.bullet};
      border-radius: ${theme.border.circle};
    `}
  }

  .slick-dots li button {
    transition: 0.15s linear;
  }

  .slick-dots li button:focus,
  .slick-dots li button:hover {
    outline: 0;
    transform: scale(1.5);
  }

  .slick-dots li button:focus {
    box-shadow: 0 0 0 0.3rem #b0bbf6;
  }

  .slick-dots li button:focus:before,
  .slick-dots li button:hover:before {
    opacity: 1;
  }

  .slick-dots li.slick-active button {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
