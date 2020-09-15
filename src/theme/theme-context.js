import React from 'react';
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  red: {
    foreground: '#ffffff',
    background: 'red',
  },
  green: {
    foreground: '#ffffff',
    background: 'green',
  },
};


export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => { },
});