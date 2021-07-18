import * as S from 'components/CarouselUsersComments/styles'
import * as C from 'components'
import Slider from 'react-slick'

export interface dataUsersCommentsProps {
  dataUsersComments: [
    {
      userName: string
      city: string
      state: string
      urlUserBg: string
      urlAvatar: string
      urlProfile: string
      comment: string
    }
  ]
}

const CarouselUsersComments = ({
  dataUsersComments
}: dataUsersCommentsProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    accessibility: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  }

  if (!dataUsersComments) return <C.Load />

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {dataUsersComments.map(
          (
            {
              userName,
              city,
              state,
              urlUserBg,
              urlAvatar,
              urlProfile,
              comment
            },
            i
          ) => (
            <C.CardUsersComments
              key={userName + i}
              userName={userName}
              city={city}
              state={state}
              urlUserBg={urlUserBg}
              urlAvatar={urlAvatar}
              urlProfile={urlProfile}
              heigthREM={40}
              comment={comment}
            />
          )
        )}
      </Slider>
    </S.Wrapper>
  )
}

export default CarouselUsersComments
