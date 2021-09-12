import { IconBaseProps } from 'react-icons/lib';
import * as S from './styles';

interface NextPageButtonProps {
  url: string;
  icon?: React.ComponentType<IconBaseProps>;
  text: string;
}

export function NextPageButton({ url, text, icon: Icon }: NextPageButtonProps) {
  return (
    <S.NextPageButton to={`/${url}`}>
      {text} {Icon && <Icon />}
    </S.NextPageButton>
  );
}

export default NextPageButton;
