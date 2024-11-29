import styled from "styled-components";

interface Props {
  alignItems?: string;
}

const Section = styled.section`
  display: flex;
  background-color: #efefef;
  border-radius: 25px;
  flex-direction: row;
  margin: 3% 10%;
  padding: 4% 10% 4% 5%;
  justify-content: space-between;
  &:hover {
    background-color: #cacaca;
  }
`;

const Pedido = styled.section<Props>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: ${({ alignItems }) => alignItems || "stretch"};
`;

const PedidosDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15%;
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

const Status = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #9b0808;
`;

const Components = {
  Section,
  Pedido,
  PedidosDiv,
  Title,
  TipoDiv,
  Tipo,
  ItemPedido,
  Status,
};

export default Components;
