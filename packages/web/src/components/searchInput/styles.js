import styled from 'styled-components';

export const Container = styled.form`
  position: relative;
  .custom-icon {
    position: absolute;
    top: 60%;
    left: 3%;
    transform: translate(-50%, -50%);
  }
  input {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    margin-top: 1rem;
    padding-left: 3rem;
    color: var(--black2);
  }
`;
