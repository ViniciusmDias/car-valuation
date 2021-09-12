import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 10rem;
    background: var(--red);
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);

    color: var(--white);

    &::before {
      // Flecha em baixo do tooltip.
      content: '';
      border-style: solid;
      border-color: var(--red) transparent;
      border-width: 0.5rem 0.5rem 0 0.5rem;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
