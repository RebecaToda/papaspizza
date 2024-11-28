import styled from "styled-components";

const PizzaSection = styled.section`
  background-image: url("/src/assets/images/homePizza.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 70vh;
  display: flex;

  align-content: center;
  flex-wrap: wrap;

  div {
    max-width: max-content;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 5%;
    display: flex;
    gap: 50px;
  }

  .button {
    max-width: none;
    padding-left: 0%;
    display: flex;
    flex-direction: row;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  font-family: "Inter", sans-serif;
  font-weight: 800;
  color: white;
  max-width: 455px;
`;

const Components = {
  PizzaSection,
  Title,
};

export default Components;
