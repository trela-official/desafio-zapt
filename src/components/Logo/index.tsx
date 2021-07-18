import * as S from './styles'

export type LogoProps = {
  color?: 'red' | 'blue'
  size?: 'small' | 'medium'
}

const Logo = ({ color, size }: LogoProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Zapt logo in ${color} color`}
    >
      <path
        d="M0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31C62 48.1208 48.1208 62 31 62H0L0 31Z"
        fill="#FF5B58"
      />
    </svg>
  </S.Wrapper>
)

export default Logo
