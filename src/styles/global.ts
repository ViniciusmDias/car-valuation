import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {

    font-size: 90%;
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
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  
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
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  body, input, button, textarea, select, option {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  @media(min-width: 700px) {
    :root{
      font-size: 120%;
    }
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
    font-size: 1.3rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: normal;
    line-height: normal;
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

  select, option {
    -webkit-appearance: none;
  }

  * {
    scrollbar-width: thin;
  }

  *::-webkit-scrollbar {
    height: 0.4rem;
    width: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }: GlobalThemeProps) => theme.card};
    opacity: 0.2;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--gray);
    border-radius: 1rem;
  }
`;

export default withTheme(globalStyle);
