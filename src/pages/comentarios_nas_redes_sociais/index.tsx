import axios from 'axios'
import * as C from 'components'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import * as S from 'pages/comentarios_nas_redes_sociais/styles'
import { useEffect, useRef, useState } from 'react'

export interface dataCommentsSocialProps {
  userName: string
  img: string
  comment: string
  urlProfile: string
}

export default function SocialComments({
  dataCommentsSocial
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [load, setLoad] = useState(false)
  const [count, setCount] = useState(18)

  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLoad(true)

    try {
      const callBackObserver = ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          if (dataCommentsSocial.length - 1 <= count) {
            observer.disconnect()
          } else {
            setCount(prevState => prevState + 9)
          }
        }
      }

      const options = {
        root: null,
        rootMargin: '0px 0px 0px 0px'
      }

      const observer = new IntersectionObserver(callBackObserver, options)
      !!observerRef.current && observer.observe(observerRef.current)
    } catch {
      setCount(dataCommentsSocial.length - 1)
    }
    setLoad(false)
  }, [count, dataCommentsSocial.length])

  if (!dataCommentsSocial) return <C.Load />

  return (
    <S.Container>
      <C.HeadPage title="O que estão falando nas redes sociais" />

      <C.TitleSection title="O que estão falando nas redes sociais" />

      <S.GridSocialComments>
        {dataCommentsSocial
          .slice(0, count)
          .map(
            (
              { userName, img, comment, urlProfile }: dataCommentsSocialProps,
              i: number
            ) => (
              <C.SocialComments
                key={userName + i}
                comment={comment}
                img={img}
                userName={userName}
                urlProfile={urlProfile}
              />
            )
          )}
      </S.GridSocialComments>

      <div ref={observerRef}>
        <C.IF condition={load}>
          <C.Load />
        </C.IF>
      </div>
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/everton-dgn/desafio-zapt/main/public/API/social_comments.json'
  )
  const dataCommentsSocial = data

  return {
    props: {
      dataCommentsSocial
    }
  }
}
