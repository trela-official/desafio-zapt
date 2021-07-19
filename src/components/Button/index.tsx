import * as S from './styled'

type ButtonProps = {
  title: string
}

const Button = ({ title }: ButtonProps) => <S.Button>{title}</S.Button>

export default Button
