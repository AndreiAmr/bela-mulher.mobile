import 'styled-components/native';

export interface CustomThemeProps {
  borderRadius: string;

  colors: {
    main: string;
    secondary: string;
  };
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomThemeProps {}
}
