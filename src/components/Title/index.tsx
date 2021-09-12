import * as S from './styles';

interface TitleProps {
  text: string;
  style?: React.CSSProperties;
}

export function Title({ text, style }: TitleProps) {
  return <S.Title style={style}>{text}</S.Title>;
}
