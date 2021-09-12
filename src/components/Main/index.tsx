import { ReactNode } from 'react';
import * as S from './styles';

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return <S.Container>{children}</S.Container>;
}
