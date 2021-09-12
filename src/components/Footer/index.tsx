import { ReactNode } from 'react';
import * as S from './styles';

interface FooterProps {
  children: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return <S.Footer>{children}</S.Footer>;
}
