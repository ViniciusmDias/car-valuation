import { ReactNode } from 'react';
import { ThemeProvider } from './theme';

interface ContextsProps extends React.HTMLAttributes<Element> {
  children: ReactNode;
}

export function Contexts({ children }: ContextsProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
