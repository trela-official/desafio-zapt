import { render, screen } from 'utils/test-utils'

import Typography from '.'

describe('<Typography />', () => {
  it('should render the Typography component with its children', () => {
    render(<Typography>Test</Typography>)

    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('should render the default styles', () => {
    render(<Typography>Test</Typography>)

    expect(screen.getByRole('heading', { name: /test/i })).toHaveStyle({
      'font-size': '1.6rem',
      'font-weight': '400',
      color: '#000000'
    })
  })

  it('should render the xsmall size', () => {
    render(<Typography size="xsmall">Test 2</Typography>)

    expect(screen.getByRole('heading', { name: /test 2/i })).toHaveStyle({
      'font-size': '1.2rem'
    })
  })

  it(`should render the small size`, () => {
    render(<Typography size="small">Test 3</Typography>)

    expect(screen.getByRole('heading', { name: /test 3/i })).toHaveStyle({
      'font-size': '1.4rem'
    })
  })

  it(`should render the medium size`, () => {
    render(<Typography size="medium">Test 4</Typography>)

    expect(screen.getByRole('heading', { name: /test 4/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })

  it(`should render the large size`, () => {
    render(<Typography size="large">Test 5</Typography>)

    expect(screen.getByRole('heading', { name: /test 5/i })).toHaveStyle({
      'font-size': '2rem'
    })
  })

  it(`should render the xlarge size`, () => {
    render(<Typography size="xlarge">Test 6</Typography>)

    expect(screen.getByRole('heading', { name: /test 6/i })).toHaveStyle({
      'font-size': '2.8rem'
    })
  })

  it(`should render the huge size`, () => {
    render(<Typography size="huge">Test 7</Typography>)

    expect(screen.getByRole('heading', { name: /test 7/i })).toHaveStyle({
      'font-size': '4rem'
    })
  })

  it(`should render the primary color`, () => {
    render(<Typography color="primary">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#334BC8'
    })
  })

  it(`should render the secondary color`, () => {
    render(<Typography color="secondary">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#FF5B58'
    })
  })

  it(`should render the lightGray color`, () => {
    render(<Typography color="lightGray">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it(`should render the white color`, () => {
    render(<Typography color="white">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#FFFFFF'
    })
  })

  it(`should render the gray color`, () => {
    render(<Typography color="gray">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#7B7B7B'
    })
  })

  it(`should render the lightBlue color`, () => {
    render(<Typography color="lightBlue">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#2196F3'
    })
  })

  it(`should render the neutralBlue color`, () => {
    render(<Typography color="neutralBlue">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#011FBB'
    })
  })

  it(`should render the darkBlue color`, () => {
    render(<Typography color="darkBlue">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#001C33'
    })
  })

  it(`should render the black color`, () => {
    render(<Typography color="black">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      color: '#000000'
    })
  })

  it(`should render the light weight`, () => {
    render(<Typography weight="light">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      'font-weight': '300'
    })
  })

  it(`should render the regular weight`, () => {
    render(<Typography weight="regular">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      'font-weight': '400'
    })
  })

  it(`should render the medium weight`, () => {
    render(<Typography weight="medium">Hello</Typography>)

    expect(screen.getByRole('heading', { name: /hello/i })).toHaveStyle({
      'font-weight': '500'
    })
  })
})
