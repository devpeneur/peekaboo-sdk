import { createGlobalStyle } from 'styled-components';

interface InitOptions {
  theme?: object;
  fonts?: object;
}

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

export const defaultTheme = {
  primaryColor: '#3498db',
  secondaryColor: '#2ecc71',
};

class Peekaboo {
  theme: object;

  constructor(options: InitOptions) {
    this.theme = { ...defaultTheme, ...options.theme };
  }

}

export default Peekaboo;
