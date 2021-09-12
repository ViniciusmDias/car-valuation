import styled from 'styled-components';

export const Select = styled.label`
  color: ${({ theme }) => theme.textSecondary};
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  letter-spacing: 0.84px;
  line-height: 0.75rem;
  margin-bottom: 1rem;

  p {
    margin-bottom: 1rem;
  }

  select {
    background-color: ${({ theme }) => theme.card};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.textSecondary};
    color: ${({ theme }) => theme.textSecondary};
    font-size: 0.75rem;
    font-weight: 400;
    height: 2rem;
    letter-spacing: 0.72px;
    line-height: 0.75rem;
    padding: 0.3rem 0.75rem;

    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
`;
