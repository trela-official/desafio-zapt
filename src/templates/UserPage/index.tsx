import Card, { CardProps } from "components/Card";
import Heading from "components/Heading";

import Carousel from "react-elastic-carousel";

import { cardItems } from "./mock";

import * as S from "./styles";

export default function UsersPage() {
  const breakPoints = [
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2, itemsToScroll: 2 },
  ];

  return (
    <S.Wrapper>
      <Heading level={1} color="black" className="user-page-title">
        O que as pessoas estão achando
      </Heading>

      <S.Slide>
        <Carousel isRTL={false} breakPoints={breakPoints}>
          {cardItems.map((cardItem: CardProps, index: number) => {
            return <Card key={index} {...cardItem} />;
          })}
        </Carousel>
      </S.Slide>
    </S.Wrapper>
  );
}
