import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';

import { useTheme } from '../contexts/theme';
import { lightTheme, darkTheme } from '../styles/themes';
import Header from '../components/Header';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export function Route({ component: Component, ...rest }: RouteProps) {
  const { theme } = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Header />
            <Component />
          </ThemeProvider>
        );
      }}
    />
  );
}
