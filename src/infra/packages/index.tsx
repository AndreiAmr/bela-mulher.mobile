import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { styledTheme } from './styledComponents/theme';

const PackagesProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>;
};

export default PackagesProviders;
