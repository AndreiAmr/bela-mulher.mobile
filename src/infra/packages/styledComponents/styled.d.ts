import 'styled-components/native';

export interface CustomThemeProps {
  borderRadius: string;

  colors: {
    main: string;
    secondary: string;
    gray: string;
    onboarding_background: string;
    purple: string;
    error: string;
    marrom_bombom: string;
  };
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomThemeProps {}
}
