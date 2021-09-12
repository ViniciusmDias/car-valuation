import { ReactNode } from 'react';
import { CarProvider } from './car';
import { ThemeProvider } from './theme';

interface ContextsProps extends React.HTMLAttributes<Element> {
  children: ReactNode;
}

export function Contexts({ children }: ContextsProps) {
  return (
    <ThemeProvider>
      <CarProvider>{children}</CarProvider>
    </ThemeProvider>
  );
}
