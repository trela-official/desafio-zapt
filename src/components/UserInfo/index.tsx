import * as S from './styles';

export type UserInfoProps = {
  avatarUrl: string;
  name: string;
  city: string;
  state: string;
};

const UserInfo = ({ avatarUrl, name, city, state }: UserInfoProps) => (
  <S.Wrapper>
    <S.AvatarWrapper>
      <S.Avatar
        src={avatarUrl}
        alt={name}
        layout="fill"
        placeholder="blur"
        blurDataURL={avatarUrl}
      />
    </S.AvatarWrapper>

    <S.Info>
      <S.Name>{name}</S.Name>
      <S.City>
        {city} • {state}
      </S.City>
    </S.Info>
  </S.Wrapper>
);

export default UserInfo;
