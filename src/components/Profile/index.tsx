import Image from "next/image";

import Heading from "components/Heading";

import * as S from "./styles";

export type ProfileProps = {
  profileImg: string;
  name: string;
  state: string;
  city: string;
};

function Profile({ profileImg, name, state, city }: ProfileProps) {
  return (
    <S.Wrapper>
      <Image
        src={profileImg}
        width={40}
        height={40}
        alt={name}
        className="profile-image"
      />
      <S.Info>
        <Heading level={3} className="profile-name">
          {name}
        </Heading>
        <Heading level={4} className="profile-info">
          {state} • {city}
        </Heading>
      </S.Info>
    </S.Wrapper>
  );
}

export default Profile;
