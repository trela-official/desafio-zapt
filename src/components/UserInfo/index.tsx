import * as S from './styles';

export type UserInfoProps = {
  avatarUrl: string;
  name: string;
  city: string;
  state: string;
};

const UserInfo = ({ avatarUrl, name, city, state }: UserInfoProps) => (
  <S.Wrapper>
    <S.Avatar src={avatarUrl} alt={name} />

    <S.Info>
      <S.Name>{name}</S.Name>
      <S.City>
        {city} • {state}
      </S.City>
    </S.Info>
  </S.Wrapper>
);

export default UserInfo;
