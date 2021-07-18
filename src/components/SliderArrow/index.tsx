import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export type SliderArrowProps = {
  direction: 'right' | 'left';
  label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SliderArrow = ({ direction, label, ...props }: SliderArrowProps) => (
  <S.Wrapper {...props} direction={direction}>
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M8.625 5.25l6.75 6.75-6.75 6.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label={label || `arrow ${direction}`}
      />
    </svg>
  </S.Wrapper>
);

export default SliderArrow;
