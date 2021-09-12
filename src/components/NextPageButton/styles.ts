import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NextPageButton = styled(Link)`
  display: flex;
  align-items: center;
  bottom: 0;
  position: absolute;
  font-weight: 600;
  margin-bottom: 8vh;
  color: ${({ theme }) => theme.text};

  svg {
    margin-left: 0.5rem;
  }
`;
