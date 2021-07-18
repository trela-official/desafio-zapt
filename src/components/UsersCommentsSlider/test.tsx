import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

import UsersCommentsSlider, { BannerSliderProps } from '.';

import { usersComments } from './mock';

const props: BannerSliderProps = {
  comments: [...usersComments],
};

describe('<UsersCommentsSlider />', () => {
  it('should render with 2 active item', () => {
    const { container } = render(<UsersCommentsSlider {...props} />);

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(
      usersComments.length
    );
    expect(
      container.querySelectorAll('.slick-slide.slick-active')
    ).toHaveLength(2);
  });

  it('should render with two visible user names', () => {
    render(<UsersCommentsSlider {...props} />);

    expect(
      screen.getByRole('heading', {
        name: usersComments[0].user.name,
        hidden: false,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: usersComments[1].user.name,
        hidden: false,
      })
    ).toBeInTheDocument();
  });

  it('should render with two hidden user names', () => {
    render(<UsersCommentsSlider {...props} />);

    expect(
      screen.getAllByRole('heading', {
        name: usersComments[0].user.name,
        hidden: true,
      })
    ).toHaveLength(2);
    expect(
      screen.getAllByRole('heading', {
        name: usersComments[1].user.name,
        hidden: true,
      })
    ).toHaveLength(2);
  });
});
