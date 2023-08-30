import 'styled-components/native';

export interface CustomThemeProps {
  borderRadius: string;

  colors: {
    main: string;
    secondary: string;
    gray: string;
    onboarding_background: string;
    purple: string;
  };
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomThemeProps {}
}
