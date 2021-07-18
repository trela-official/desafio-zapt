import { render, screen } from 'utils/test-utils';
import userEvent from '@testing-library/user-event';

import SliderArrow from '.';

describe('<SliderArrow />', () => {
  it('should render right arrow', () => {
    const { container } = render(<SliderArrow direction="right" />);

    expect(
      screen.getByRole('img', { name: /arrow right/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render left arrow', () => {
    const { container } = render(<SliderArrow direction="left" />);

    expect(
      screen.getByRole('img', { name: /arrow left/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with custom label arrow', () => {
    render(<SliderArrow direction="right" label="my custom label" />);

    expect(
      screen.getByRole('img', { name: /my custom label/i })
    ).toBeInTheDocument();
  });

  it('should dispatch onClick when clicked', () => {
    const onClick = jest.fn();

    render(<SliderArrow direction="right" onClick={onClick} />);

    userEvent.click(screen.getByRole('img', { name: /arrow right/i }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
