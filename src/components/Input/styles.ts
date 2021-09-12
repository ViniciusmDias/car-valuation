import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.background};
  border: 1px solid var(--gray);
  color: ${({ theme }) => theme.text};
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red) !important;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--red);
      border-color: var(--green);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--green);
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.text};
  }

  svg {
    margin-right: 1rem;
  }
`;

export const Error = styled(Tooltip)`
  flex: 0 !important;
  height: 1.5rem;
  margin-left: 1rem;

  svg {
    margin: 0;
  }

  span {
    background: var(--red);
    color: var(--white);

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
