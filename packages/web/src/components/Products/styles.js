import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 5rem auto;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .card {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    margin: 0 1rem 2rem 0;
    border: 1px solid var(--black3);
    border-radius: 0.5rem;
    cursor: pointer;

    transition: 0.5s ease all;

    position: relative;
    .favorite-icon {
      position: absolute;
      top: 5%;
      left: 5%;
      transform: translate(-50%, -50%);
    }

    img {
      margin: 1rem 0;
      width: 80%;
    }
    .title {
      font-weight: bold;
      color: var(--black1);
      margin-bottom: 1rem;
    }
    .price {
      font-weight: bold;
      color: var(--black2);
      margin-bottom: 1rem;
    }
    &:hover {
      /* box-shadow: 1px 1px var(--black2), 2px 2px var(--black2),
        3px 3px var(--black2);
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px); */

      /* -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1); */
    }
  }
`;
