import { CSSProperties } from 'styled-components';

import * as S from './styles';

interface LoadingProps {
  style?: CSSProperties;
}

export function Loading({ style }: LoadingProps) {
  return (
    <S.Container className="ellipsis" style={style}>
      <div />
      <div />
      <div />
      <div />
    </S.Container>
  );
}
