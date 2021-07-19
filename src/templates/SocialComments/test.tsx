import { render, screen } from 'utils/test-utils';

import SocialComments, { SocialCommentsTemplateProps } from '.';

import { socialComments } from 'components/SocialCommentsList/mock';

const props: SocialCommentsTemplateProps = {
  comments: socialComments,
};

describe('<SocialComments />', () => {
  beforeEach(() => {
    render(<SocialComments {...props} />);
  });

  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', {
        name: /O que estão falando nas redes sociais/i,
      })
    ).toBeInTheDocument();
  });

  it('should render the heading', () => {
    expect(
      screen.getByRole('heading', {
        name: /O que estão falando nas redes sociais/i,
      })
    ).toBeInTheDocument();
  });
});
