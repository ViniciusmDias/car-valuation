import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  .switch {
    display: inline-block;
    height: 1.5rem;
    position: relative;
    width: 4rem;
  }

  .switch input {
    height: 0;
    opacity: 0;
    width: 0;
  }

  .slider {
    -webkit-transition: 0.2s;
    background-color: ${({ theme }) => theme.card};
    bottom: 0;
    box-shadow: 0 0 2px ${({ theme }) => theme.text};
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.2s;
  }

  .slider:before {
    -webkit-transition: 0.2s;
    background-color: ${({ theme }) => theme.boxShadow};
    bottom: 5px;
    content: '';
    height: 14px;
    left: 7px;
    position: absolute;
    transition: 0.2s;
    width: 14px;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.card};
  }

  input:checked + .slider:before {
    -ms-transform: translateX(35px);
    -webkit-transform: translateX(35px);
    transform: translateX(35px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const Icons = styled.span`
  align-items: center;
  display: flex;
  justify-content: space-between;
  top: 25%;
  width: 100%;

  svg {
    color: var(--yellow);
    z-index: 11;
  }
`;
