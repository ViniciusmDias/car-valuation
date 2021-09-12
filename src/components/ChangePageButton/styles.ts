import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NextPageButton = styled(Link)`
  display: flex;
  align-items: center;
  bottom: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;
