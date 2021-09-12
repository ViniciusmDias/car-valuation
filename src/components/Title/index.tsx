import * as S from './styles';

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <S.Title>{text}</S.Title>;
}
