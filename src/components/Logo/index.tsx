import * as S from './styles'

export type LogoProps = {
  color?: 'red' | 'blue'
  size?: 'small' | 'medium'
}

const Logo = ({ color = 'blue', size = 'small' }: LogoProps) => (
  <S.Wrapper
    color={color}
    size={size}
    role="img"
    aria-label={`Zapt logo in ${color} color`}
  >
    <svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31C62 48.1208 48.1208 62 31 62H0L0 31Z"
        fill="currentColor"
      />
    </svg>
  </S.Wrapper>
)

export default Logo
