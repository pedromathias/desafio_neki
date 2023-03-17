import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #1c1919;
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-top:0%;
`;

export const ButtonExit = styled.div`
  margin-right: 3%;
`;

export const Title = styled.div`
font-size:32px;
margin-top :2rem;
color: white;
font-family:Impact, Haettenschweiler, 'Arial Narrow', sans-serif;
`;

export const Logotype = styled.div`
  margin-right: 60rem;
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 50%;
`;

export const BemVindo = styled.h2`
  text-align: center;
  margin-top: 3%;
`;

export const DivRefresh = styled.h2`
  text-align: center;
  align-items: center;
  margin-top: 3%;
  width: 100%;
`;

export const DivModal = styled.h2`
  text-align: center;
  align-items: center;
  margin-left: -15%;
  margin-right: 5%;
  width: 20%;
`;

export const Span = styled.span`
  color: whitesmoke;
  font-family: "League Spartan", sans-serif;
  font-weight: 300;
`;

export const ContainerList = styled.ul`
  margin-left: 10%;
  margin-right: 10%;
  margin-top:5%;
  list-style: none;
  display: grid;
  /* aqui ta deixando responsivo com o minmax */
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const ContainerButtons = styled.div`
  flex-direction: row;
  margin-left: 4%;
  margin-right: 4%;
`;

export const ContainerGridLevel = styled.div`
  margin-left: 40%;
  margin-top: -2%;
  align-self: flex-end;
`;

export const ContainerSpans = styled.div`
  flex-direction: column;
`;
