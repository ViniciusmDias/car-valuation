import styled from 'styled-components';

export const Select = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  letter-spacing: 0.84px;
  line-height: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1rem;

  p {
    margin-bottom: 1rem;
  }

  select {
    font-size: 0.75rem;
    letter-spacing: 0.72px;
    line-height: 0.75rem;
    font-weight: 400;
    height: 2rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.textSecondary};
    padding: 0.3rem 0.75rem;
    border: 1px solid ${({ theme }) => theme.textSecondary};

    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
`;
