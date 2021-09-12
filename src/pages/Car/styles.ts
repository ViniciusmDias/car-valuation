import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;
`;

export const CleanButton = styled.button`
  background: transparent;
  border: 0;
  display: flex;
`;
