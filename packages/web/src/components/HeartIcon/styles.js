import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
`;
export const Loader = styled.div`
  display: inline-block;

  &:after {
    content: ' ';
    display: block;
    height: 1rem;
    width: 1rem;
    margin: 0.4rem;
    margin: 0.4rem;
    border-radius: 50%;
    border: 0.1rem solid var(--black1);
    border-color: var(--black1) transparent var(--black1) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
