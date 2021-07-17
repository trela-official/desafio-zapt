import * as S from './styles';

export type TeardropProps = {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'normal';
};

const Teardrop = ({ color = 'primary', size = 'normal' }: TeardropProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 62 62"
      role="img"
      aria-label="Teardrop"
    >
      <path
        d="M0 31C0 13.88 13.88 0 31 0c17.12 0 31 13.88 31 31 0 17.12-13.88 31-31 31H0V31z"
        fill="currentColor"
      />
    </svg>
  </S.Wrapper>
);

export default Teardrop;
