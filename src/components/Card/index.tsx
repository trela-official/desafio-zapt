import Heading from "components/Heading";
import Profile from "components/Profile";

import Image from "next/image";

import * as S from "./styles";

export type CardProps = {
  testimony: string;
  name: string;
  state: string;
  city: string;
  img: string;
  profileImg: string;
};

function Card({ testimony, name, state, city, img, profileImg }: CardProps) {
  return (
    <S.Wrapper>
      <Image
        layout="fill"
        objectFit="cover"
        src="/img/noise-overlay.png"
        alt="Noise overlay"
        className="card-noise-overlay"
      />
      <Image
        layout="fill"
        objectFit="cover"
        src={img}
        alt={name}
        className="card-background"
      />
      <Heading className="card-testimony">{testimony}</Heading>
      <Profile state={state} city={city} profileImg={profileImg} name={name} />
    </S.Wrapper>
  );
}

export default Card;
