import * as S from './styles'

type TestimonialProps = {
  thumbnail: string
  text: string
}

type UserType = {
  name: string
  avatar_url: string
  address: {
    city: string
    state: string
  }
}

export type TestimonyCardProps = {
  testimonial: TestimonialProps
  user: UserType
}

const TestimonyCard = ({ testimonial, user }: TestimonyCardProps) => (
  <S.Wrapper>
    <S.WrapperTestimonial>
      <span>{testimonial.text}</span>
      <S.WrapperUser>
        <img src={user.avatar_url} alt={user.name} />
        <p>{user.name}</p>
        <span>
          {user.address.city} &bull; {user.address.state}
        </span>
      </S.WrapperUser>
    </S.WrapperTestimonial>
    <S.Thumbnail
      src={testimonial.thumbnail}
      alt={`Imagem de capa do depoimento de ${user.name}`}
    />
  </S.Wrapper>
)

export default TestimonyCard
