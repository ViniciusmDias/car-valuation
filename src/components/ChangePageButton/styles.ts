import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NextPageButton = styled(Link)`
  align-items: center;
  bottom: 0;
  color: ${({ theme }) => theme.text};
  display: flex;
  font-weight: 600;
  opacity: 1;
  transition: all 0.5s ease-in-out;

  :hover {
    opacity: 0.7;
  }
`;
