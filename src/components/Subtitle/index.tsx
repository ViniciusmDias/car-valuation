import * as S from './styles';

interface SubtitleProps {
  text: string;
}

export function Subtitle({ text }: SubtitleProps) {
  return <S.Subtitle>{text}</S.Subtitle>;
}
