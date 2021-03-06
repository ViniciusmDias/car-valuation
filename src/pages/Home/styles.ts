import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 2rem;
  height: calc(100vh - 5rem);
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;

  span {
    color: var(--green);
    font-weight: 600;
  }
`;
