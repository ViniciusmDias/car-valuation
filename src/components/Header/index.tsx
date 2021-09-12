import { Link } from 'react-router-dom';
import logo from '../../assets/logo-creditas.svg';
import { ThemeToggler } from '../ThemeToggler';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <Link to="/" id="go to home">
        <img src={logo} alt="Creditas" />
      </Link>
      <ThemeToggler />
    </S.Container>
  );
}
