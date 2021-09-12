import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  height: calc(100vh - 5rem);
`;

export const Subtitle = styled.h4`
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-weight: 400;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;

  span {
    color: var(--green);
    font-weight: 600;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  line-height: 2rem;
`;
