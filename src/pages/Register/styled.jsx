import styled from "styled-components";

export const Page = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
align-items:center;
margin-top: 3rem;
`;

export const Logo = styled.div`
opacity:0.7
`;

export const Container = styled.div`
width: 25rem;
  border-radius:0.5rem;
  margin-top: 3rem; 
 box-shadow: 10px 5px 5px black;
`;

export const Content = styled.div`
gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #2d939c;
  padding: 20px;
  border-radius: 5px;
`;

export const Words = styled.p`
  font-size: 200%;
`;