import 'match-media-mock';
import { render, screen } from 'utils/test-utils';

import { usersComments } from 'components/UsersCommentsSlider/mock';

import UsersCommentsTemplate, { UsersCommentsTemplateProps } from '.';

const props: UsersCommentsTemplateProps = {
  comments: usersComments,
};

describe('<UsersCommentsTemplate />', () => {
  beforeEach(() => {
    render(<UsersCommentsTemplate {...props} />);
  });

  it('should render with the heading', () => {
    expect(
      screen.getByRole('heading', { name: /o que as pessoas estão achando/i })
    ).toBeInTheDocument();
  });

  it('should render with users comments slider', () => {
    expect(
      screen.getByRole('heading', { name: props.comments[0].user.name })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: props.comments[1].user.name })
    ).toBeInTheDocument();
  });
});
