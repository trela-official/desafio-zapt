import * as S from 'components/SocialComments/styles'
import Link from 'next/link'

export type SocialCommentsProps = {
  comment: string
  img: string
  userName: string
  urlProfile: string
}

const SocialComments = ({
  comment,
  img,
  userName,
  urlProfile
}: SocialCommentsProps) => (
  <S.Wrapper>
    <S.Paragraph>{comment}</S.Paragraph>

    <S.WrapperUser>
      <Link href={urlProfile} passHref>
        <S.WrapperLinkProfile>
          <S.WrapperImgAvatar>
            <S.ImgAvatar
              src={`/imgs/${img}`}
              alt={userName}
              width="35"
              height="35"
            />
          </S.WrapperImgAvatar>

          <S.UserName>{userName}</S.UserName>
        </S.WrapperLinkProfile>
      </Link>
    </S.WrapperUser>
  </S.Wrapper>
)

export default SocialComments
