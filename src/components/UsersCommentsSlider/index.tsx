import UserCommentCard, {
  UserCommentCardProps,
} from 'components/UserCommentCard';
import Slider, { SliderSettings } from 'components/Slider';
import SliderArrow from 'components/SliderArrow';

export type BannerSliderProps = {
  comments: UserCommentCardProps[];
};

const settings: SliderSettings = {
  dots: true,
  arrows: true,
  infinite: false,
  slidesToShow: 2,
  prevArrow: <SliderArrow direction="left" />,
  nextArrow: <SliderArrow direction="right" />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
  ],
};

import * as S from './styles';

const UsersCommentsSlider = ({ comments }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {comments.map((comment, index) => (
        <UserCommentCard
          // I know it is not recommended to use index as key.
          // I am only using it to avoid key errors, since values are mocked.
          key={`${comment.imageBackgroundUrl} + ${index}`}
          {...comment}
        />
      ))}
    </Slider>
  </S.Wrapper>
);

export default UsersCommentsSlider;
