import styled from 'styled-components';

export const Container = styled.div`
  width:90%;
  margin:2rem auto 0 auto;

  ul{
    display:flex;
    align-items: center;
    list-style:none;
    li{
      transition: 0.5s ease all;
      color:var(--black0);
      cursor:pointer;
      font-weight:bold;
      display: flex;
      align-items: center;

      &:nth-child(2)::before{
        content: ">";
        margin:0 0.5rem;
      }
      &:hover{
        opacity:0.8;
      }
    }
  }
`;
