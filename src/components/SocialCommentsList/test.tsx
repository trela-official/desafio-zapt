import { render, screen } from 'utils/test-utils';

import SocialCommentsList, { SocialCommentsListProps } from '.';

import { socialComments } from './mock';

const props: SocialCommentsListProps = {
  comments: [...socialComments].slice(0.2),
};

describe('<SocialCommentsList />', () => {
  beforeEach(() => {
    render(<SocialCommentsList {...props} />);
  });

  it('should render with first comment info', () => {
    expect(screen.getByText(props.comments[0].comment)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: props.comments[0].authorNickname })
    ).toHaveAttribute('src', props.comments[0].authorAvatarUrl);
    expect(
      screen.getByText(props.comments[0].authorNickname)
    ).toBeInTheDocument();
  });

  it('should render with second comment info', () => {
    expect(screen.getByText(props.comments[1].comment)).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: props.comments[1].authorNickname })
    ).toHaveAttribute('src', props.comments[1].authorAvatarUrl);
    expect(
      screen.getByText(props.comments[1].authorNickname)
    ).toBeInTheDocument();
  });
});
