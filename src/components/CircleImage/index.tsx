import * as S from './styles';

const CircleImage = () => (
  <S.Wrapper>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      role="img"
      aria-label="Circle"
    >
      <circle cx="40" cy="40" r="40" fill="currentColor" />
    </svg>
  </S.Wrapper>
);

export default CircleImage;
