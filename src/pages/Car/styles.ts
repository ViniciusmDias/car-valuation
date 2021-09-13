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

export const LinkExternal = styled.a`
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
