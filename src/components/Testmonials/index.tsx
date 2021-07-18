import * as S from './styles'

type UserProps = {
  id: String
  avatar: String
}

type TestmonialProps = {
  message: String
  user: UserProps
}

export type TestmonialsProps = {
  testmonials: TestmonialProps[]
}

const Testmonials = ({ testmonials }: TestmonialsProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>O que estão falando nas redes sociais</S.Title>
      <S.TestmonialsCards>
        {testmonials.map(({ message, user }, index) => (
          <S.Card key={index}>
            <S.MessageUser>{message}</S.MessageUser>
            <S.Author>
              <S.AuthorImg
                src={user.avatar}
                alt={`Avatar do usuário ${user.id}`}
              />
              {user.id}
            </S.Author>
          </S.Card>
        ))}
      </S.TestmonialsCards>
    </S.Content>
  </S.Wrapper>
)

export default Testmonials
