import styled from "styled-components";

const SectionRegistro = styled.section`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2% 2%;

  a {
    all: unset;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 15px;
  padding: 30px 5px;
  max-width: fit-content;
  cursor: pointer;

  img {
    width: 80%;
    border-radius: 10px;
  }

  &:hover {
    background-color: #eaeaea;
  }
`;

const Itens = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 35px;
  font-weight: 600;
  color: black;
  max-width: fit-content;
`;

const Components = {
  SectionRegistro,
  Cards,
  Itens,
};

export default Components;
