import FeedbackCardSlider from "components/FeedbackCardSlider";

import { feedbacks } from "./mock";

import * as S from "./styles";

const UserComments = () => {
  return (
    <S.Wrapper>
      <h1>O que as pessoas estão achando</h1>
      <FeedbackCardSlider feedbacks={feedbacks} />
    </S.Wrapper>
  );
};

export default UserComments;
