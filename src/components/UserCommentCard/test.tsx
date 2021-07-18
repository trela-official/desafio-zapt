import { render, screen } from 'utils/test-utils';

import UserCommentCard from '.';

import { userComment } from './mock';

describe('<UserCommentCard />', () => {
  it('should math snapshot', () => {
    const { container } = render(<UserCommentCard {...userComment} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with background image', () => {
    render(<UserCommentCard {...userComment} />);

    expect(
      screen.getByRole('img', { name: userComment.imageBackgroundAlt })
    ).toHaveAttribute('src', userComment.imageBackgroundUrl);
  });

  it('should render with comment', () => {
    render(<UserCommentCard {...userComment} />);

    expect(screen.getByText(userComment.comment)).toBeInTheDocument();
  });
});
