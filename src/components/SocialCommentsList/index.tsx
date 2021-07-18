import SocialCommentCard, {
  SocialCommentCardProps,
} from 'components/SocialCommentCard';

export type SocialCommentsListProps = {
  comments: SocialCommentCardProps[];
};

import * as S from './styles';

const SocialCommentsList = ({ comments }: SocialCommentsListProps) => (
  <S.Wrapper>
    {comments.map((comment) => (
      <S.SocialCommentItem key={comment.authorNickname}>
        <SocialCommentCard {...comment} />
      </S.SocialCommentItem>
    ))}
  </S.Wrapper>
);

export default SocialCommentsList;
