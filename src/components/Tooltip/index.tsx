import { ReactNode } from 'react';

import * as S from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export function Tooltip({ title, className, children }: TooltipProps) {
  return (
    <S.Container className={className}>
      {children}
      <span>{title}</span>
    </S.Container>
  );
}
