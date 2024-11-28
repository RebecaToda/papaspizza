import styled from "styled-components";

interface Props {
  height?: string;
  width?: string;
}

const Registro = styled.section`
  background-color: white;
  padding: 30px 0 80px;

  img {
    width: 50%;
  }
`;

const Campos = styled.div`
  background-color: white;
  padding-left: 5%;
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
  gap: 5px;
  flex-direction: column;
  width: 100%;
`;

const NomeCampo = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: black;
`;

const InputNormal = styled.input<Props>`
  background: #ffffff;
  border: 2px solid #858585;
  border-radius: 10px;
  padding: 0 10px;
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

const Components = {
  Registro,
  Campos,
  Title,
  Line,
  InputDiv,
  NomeCampo,
  InputNormal,
  Precos,
};

export default Components;
