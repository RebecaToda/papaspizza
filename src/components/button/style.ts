import styled from "styled-components";

const ButtonStyled = styled.button`
  background: #000000;
  border-radius: 10px;
  width: 180px;
  height: 60px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  outline: none;
  border: none;
  box-shadow: none;
  cursor: pointer;

  &:hover {
    background-color: #101010;
    border: none;
    box-shadow: none;
  }

  &:active {
    filter: brightness(1.2);
    scale: 0.98;
    border: none;
    box-shadow: none;
  }
`;

const Components = {
  ButtonStyled,
};

export default Components;
