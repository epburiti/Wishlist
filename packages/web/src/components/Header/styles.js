import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--purple);
  color: var(--white);
  height: 20%;

  &,
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    width: 90%;
    height: 80%;
    .content-title {
      width: 20%;
      h5 {
        font-size: 1.6rem;
      }
    }

    .content-search {
      max-width:1000px;
      width: 80%;
      ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        li {
          font-size: 1rem;
          cursor: pointer;
          transition: 0.5s ease all;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      .search {
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
      }
    }
  }
  @media (max-width: 650px) {
    & {
      height: 35%;
    }
    .content {
      flex-direction: column;
      justify-content: space-around;
      .content-search {
        width: 90%;
      }
    }
  }
  @media (max-width: 540px) {
    .content-search {
      ul {
        li {
          font-size: 0.7rem !important;
        }
      }
    }
  }
`;
