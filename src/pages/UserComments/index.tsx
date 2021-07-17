import FeedbackCardSlider from "components/FeedbackCardSlider";
import { Container } from "components/Container";

import { feedbacks } from "./mock";

const UserComments = () => {
  return (
    <Container>
      <h1>O que as pessoas estão achando</h1>
      <FeedbackCardSlider feedbacks={feedbacks} />
    </Container>
  );
};

export default UserComments;
