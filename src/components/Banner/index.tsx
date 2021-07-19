import * as S from 'components/Banner/styles'
import * as C from 'components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

export type BannerProps = {
  title: string
  description: string
  question?: string
  img: string
  btn?: { textBtn: string; route: string }[]
  children?: ReactNode
}

const Banner = ({
  title,
  description,
  question,
  img,
  btn,
  children
}: BannerProps) => {
  const router = useRouter()

  return (
    <>
      <S.Container>
        <S.ImgPinkBalloon
          src="/imgs/pink-balloon.svg"
          alt="Balão Rosa"
          width="62"
          height="62"
        />
        <S.Row>
          <S.WrapperInfo>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <C.IF condition={!!question}>
              <S.Question>{question}</S.Question>
            </C.IF>

            <C.IF condition={!!btn}>
              <S.BtnGroup>
                {btn?.map(({ textBtn, route }, i) => (
                  <C.Button
                    key={textBtn}
                    color="blue"
                    size="large"
                    text={textBtn}
                    onClick={() => router.push(route)}
                    aria-label={textBtn}
                    className={`btn${i}`}
                  />
                ))}
              </S.BtnGroup>
            </C.IF>
          </S.WrapperInfo>

          <S.WrapperImg>
            <Image
              src={img}
              alt="Banner"
              width="433"
              height="313"
              priority={true}
            />
            <S.Waves />
          </S.WrapperImg>
        </S.Row>

        <S.ImgPurpleBalloon
          src="/imgs/purple-balloon.svg"
          alt="Balão Roxo"
          width="100"
          height="100"
        />
      </S.Container>

      <C.IF condition={!!children}>
        <S.Footer>{children}</S.Footer>
      </C.IF>
    </>
  )
}

export default Banner
