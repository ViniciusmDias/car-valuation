import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1A1B27;
    --dark-card: #202231;
    --dark-text: #F5F5F7;
    --dark-text-secondary: #F5F5F7B3;    
    --dark-box-shadow: #00000029;

    //white-mode
    --light-background: #FCFCFC;
    --light-card: #f2f2f2;
    --light-text: #1f2d27;
    --light-text-secondary: #6f7974;
    --white-box-shadow: #7F87904D;

    //global
    --white: #FCFCFC;
    --gray: #ecefed;
    --red: #E81A30;
    --yellow: #F5DE0D;
    --green: #11bb77;
    --blue: #3377bb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  
    ::-webkit-scrollbar {
      height: 0.3rem;
      width: 1rem;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }: GlobalThemeProps) => theme.background}
    }
    ::-webkit-scrollbar-thumb {
      background: var(--gray);
      border-radius: 0.6rem;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }: GlobalThemeProps) => theme.text};
    }
  }

  body  {
    background: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea, select, option {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  h1 {
    font-size: 3.375rem;
  }

  h2 {
    font-size: 2.25rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    line-height: normal;
    letter-spacing: normal;
    font-weight: 400;
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  strong {
    font-size: 1rem;
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  * {
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.4rem;
  }

  *::-webkit-scrollbar-track {
    opacity: 0.2;
    background: ${({ theme }: GlobalThemeProps) => theme.card};
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--gray);
    border-radius: 1rem;
  }
`;

export default withTheme(globalStyle);
