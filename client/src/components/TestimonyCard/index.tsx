import Image from 'next/image'

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
        <S.Avatar>
          <Image
            src={user.avatar_url}
            alt={user.name}
            width={40}
            height={40}
            objectFit="cover"
          />
        </S.Avatar>
        <p>{user.name}</p>
        <span>
          {user.address.city} &bull; {user.address.state}
        </span>
      </S.WrapperUser>
    </S.WrapperTestimonial>
    <S.Thumbnail>
      <Image
        src={testimonial.thumbnail}
        alt={`Imagem de capa do depoimento de ${user.name}`}
        layout="fill"
        objectFit="cover"
      />
    </S.Thumbnail>
  </S.Wrapper>
)

export default TestimonyCard
