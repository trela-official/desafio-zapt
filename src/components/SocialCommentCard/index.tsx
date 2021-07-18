import * as S from './styles';

export type SocialCommentCardProps = {
  comment: string;
  authorAvatarUrl: string;
  authorNickname: string;
};

const SocialCommentCard = ({
  comment,
  authorAvatarUrl,
  authorNickname,
}: SocialCommentCardProps) => (
  <S.Wrapper>
    <S.Comment>{comment}</S.Comment>

    <S.AuthorInfoContent>
      <S.AuthorAvatar src={authorAvatarUrl} alt={authorNickname} />
      <S.AuthorNickname>{authorNickname}</S.AuthorNickname>
    </S.AuthorInfoContent>
  </S.Wrapper>
);

export default SocialCommentCard;
