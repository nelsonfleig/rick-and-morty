// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      offWhite: string;
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
