import { CustomArrowProps } from 'react-slick'

import * as S from './styles'

export type ArrowProps = {
  direction: 'right' | 'left'
} & CustomArrowProps

const Arrow = ({ direction, ...props }: ArrowProps) => {
  return (
    <S.Wrapper {...props} direction={direction}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          stroke="#011FBB"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.625 5.25l6.75 6.75-6.75 6.75"
        />
      </svg>
    </S.Wrapper>
  )
}

export default Arrow
