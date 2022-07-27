import { createGlobalStyle, DefaultTheme, css } from 'styled-components';
import reset from 'styled-reset';

const DEFAULT_SPACING = 4;

export const theme: DefaultTheme = {
  colors: {
    // Color Palette
    darkGreen: '#264653',
    lightGreen: '#73CB51',
    red: '#F57656',
    yellow: '#e9c46a',
    orange: '#f4a261',
    darkGray: '#555',
    offWhite: '#f9f9f9',
    // Hover
    redHover: '#E76F51',
    redForbidden: '#B5573F',
    lightGreenHover: '#57993D',
    primary: '#7a04eb',
    primaryHover: '#6006b7',
    primaryForbidden: '#977cb1',
    label: '#9e9e9e',
    background: 'rgb(32, 35, 41)',
    surface: 'rgb(60, 62, 68)',
  },
  layout: {
    maxWidth: '1200px',
    section: '20px',
  },
  styles: {
    transition: 'all .3s ease-in-out',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
  },
  spacing: (spacing: number) => `${DEFAULT_SPACING * spacing}px`,
};

export const flex = (direction: string, justify: string, align: string) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;

  }

  #root {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: lightblue;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;
