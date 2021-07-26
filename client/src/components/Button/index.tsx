import * as S from './styles'

export type ButtonProps = {
  children?: string
}

const Button = ({ children }: ButtonProps) => <S.Wrapper>{children}</S.Wrapper>

export default Button
