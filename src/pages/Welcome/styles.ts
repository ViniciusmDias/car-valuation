import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  height: calc(100vh - 5rem);
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  letter-spacing: 0.84px;
  line-height: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;

  select {
    font-size: 0.75rem;
    letter-spacing: 0.72px;
    line-height: 0.75rem;
    font-weight: 400;
    margin-top: 0.625rem;
    height: 2rem;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.card};
    color: ${({ theme }) => theme.text};
    padding: 0.3rem 0.75rem;
    border: none;

    ::placeholder {
      color: ${({ theme }) => theme.text};
    }
  }
`;
