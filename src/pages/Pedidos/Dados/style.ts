import styled from "styled-components";

const Section = styled.section`
  display: flex;
  border-radius: 25px;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 5% 0;
  max-height: fit-content;
`;

const DadosPedido = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: fit-content;
`;

const Status = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Tipo = styled.h3`
  font-family: "Inter", sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: black;
`;

const ItemPedido = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: black;
  white-space: nowrap;
`;

const Line = styled.div`
  margin-top: 15px;
  height: 2px;
  width: 500px;
  background-color: #858585;
`;

const PedidosDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: black;
`;

const TipoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 8px;
`;

const InputDiv = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
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

const Cliente = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: black;

  max-width: 50vh;
`;

const Bold = styled.span`
  font-weight: 600;
`;

const BotaoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 5%;
`;

const Components = {
  Section,
  DadosPedido,
  Status,
  PedidosDiv,
  TipoDiv,
  Tipo,
  ItemPedido,
  Title,
  Line,
  InputDiv,
  Form,
  Label,
  RadioButton,
  Cliente,
  Bold,
  BotaoDiv,
};

export default Components;
