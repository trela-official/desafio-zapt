import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const customRender = (
  ui: ReactElement,
  { ...renderOptions }: RenderOptions = {}
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);

export * from '@testing-library/react';
export { customRender as render };
