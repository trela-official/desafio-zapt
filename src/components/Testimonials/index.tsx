import * as S from './styles'

type UserProps = {
  id: string
  avatar: string
}

type TestimonialProps = {
  message: string
  user: UserProps
}

export type TestimonialsProps = {
  testimonials: TestimonialProps[]
}

const Testimonials = ({ testimonials }: TestimonialsProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Title>O que estão falando nas redes sociais</S.Title>
      <S.TestimonialsCards>
        {testimonials.map(({ message, user }, index) => (
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
      </S.TestimonialsCards>
    </S.Content>
  </S.Wrapper>
)

export default Testimonials
