import { render, screen } from 'utils/test-utils';

import SocialCommentCard from '.';

import { socialComment1 } from './mock';

describe('<SocialCommentCard />', () => {
  it('should render with comment', () => {
    const { container } = render(<SocialCommentCard {...socialComment1} />);

    expect(screen.getByText(socialComment1.comment)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with author info', () => {
    render(<SocialCommentCard {...socialComment1} />);

    expect(
      screen.getByRole('img', { name: socialComment1.authorNickname })
    ).toHaveAttribute('src', socialComment1.authorAvatarUrl);
    expect(screen.getByText(socialComment1.authorNickname)).toBeInTheDocument();
  });
});
