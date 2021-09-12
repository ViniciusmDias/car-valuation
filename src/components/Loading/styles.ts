import styled, { keyframes } from 'styled-components';

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`;

export const Container = styled.div`
  align-self: center;
  display: inline-block;
  height: 80px;
  position: relative;
  width: 80px;

  div {
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    background: var(--green);
    border-radius: 50%;
    height: 1rem;
    position: absolute;
    top: 2rem;
    width: 1rem;

    &:nth-child(1) {
      animation: ${ellipsis1} 0.6s infinite;
      left: 0.5rem;
    }
    &:nth-child(2) {
      animation: ${ellipsis2} 0.6s infinite;
      left: 0.5rem;
    }
    &:nth-child(3) {
      animation: ${ellipsis2} 0.6s infinite;
      left: 2rem;
    }
    &:nth-child(4) {
      animation: ${ellipsis3} 0.6s infinite;
      left: 56px;
    }
  }
`;
