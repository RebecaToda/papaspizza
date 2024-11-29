import styled from "styled-components";

interface Props {
  height?: string;
  width?: string;
}

const Registro = styled.section`
  background-color: white;
  padding: 40px 0 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15%;

  img {
    width: 30%;
  }
`;

const Campos = styled.div`
  background-color: white;

  width: fit-content;
`;

const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: black;
`;

const Line = styled.div`
  margin-top: 15px;
  height: 2px;
  width: 500px;
  background-color: #858585;
`;

const InputDiv = styled.div`
  padding-top: 30px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    gap: 5%;
  }
`;

const NomeCampo = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;

const InputNormal = styled.input<Props>`
  background: #ffffff;
  border: 2px solid #858585;
  border-radius: 10px;
  padding: 0 10px;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "55px"};
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  vertical-align: top;
  line-height: normal;
`;

const Precos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  accent-color: #4caf50;
  width: 18px;
  height: 18px;
`;

const Components = {
  Registro,
  Campos,
  Title,
  Line,
  InputDiv,
  NomeCampo,
  InputNormal,
  Precos,
  Form,
  Label,
  RadioButton,
};

export default Components;
