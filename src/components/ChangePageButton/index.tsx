import { IconBaseProps } from 'react-icons/lib';
import * as S from './styles';

interface NextPageButtonProps {
  url: string;
  iconRight?: React.ComponentType<IconBaseProps>;
  iconLeft?: React.ComponentType<IconBaseProps>;
  text: string;
}

export function ChangePageButton({
  url,
  text,
  iconLeft: IconLeft,
  iconRight: IconRight,
}: NextPageButtonProps) {
  return (
    <S.NextPageButton to={`/${url}`}>
      {IconLeft && <IconLeft style={{ marginRight: '0.5rem' }} />}
      {text}
      {IconRight && <IconRight style={{ marginLeft: '0.5rem' }} />}
    </S.NextPageButton>
  );
}
