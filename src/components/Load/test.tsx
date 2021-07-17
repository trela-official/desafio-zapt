import { renderWithTheme } from 'utils/tests/helpers'
import Load from '.'

describe('<Load />', () => {
  it('should render a load', () => {
    const { container } = renderWithTheme(<Load />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
