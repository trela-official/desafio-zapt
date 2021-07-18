import UserInfo, { UserInfoProps } from 'components/UserInfo';

export type UserCommentCardProps = {
  imageBackgroundUrl: string;
  imageBackgroundAlt: string;
  comment: string;
  user: UserInfoProps;
};

import * as S from './styles';

const UserCommentCard = ({
  imageBackgroundUrl,
  imageBackgroundAlt,
  comment,
  user,
}: UserCommentCardProps) => (
  <S.Wrapper>
    <S.Image src={imageBackgroundUrl} alt={imageBackgroundAlt} />

    <S.Content>
      <S.Comment>
        <S.Quote>{comment}</S.Quote>
      </S.Comment>

      <UserInfo
        avatarUrl={user.avatarUrl}
        name={user.name}
        city={user.city}
        state={user.state}
      />
    </S.Content>
  </S.Wrapper>
);

export default UserCommentCard;