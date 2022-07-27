// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      darkGreen: string;
      lightGreen: string;
      red: string;
      yellow: string;
      orange: string;
      darkGray: string;
      redHover: string;
      offWhite: string;
      redForbidden: string;
      lightGreenHover: string;
      primary: string;
      primaryHover: string;
      primaryForbidden: string;
      label: string;
      background: string;
      surface: string;
    };
    layout: {
      maxWidth: string;
      section: string;
    };
    styles: {
      borderRadius: string;
      boxShadow: string;
      transition: string;
    };
    spacing: (spacing: number) => string;
  }
}
