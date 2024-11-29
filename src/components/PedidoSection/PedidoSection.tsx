import Components from "./style.ts";

const {
  Section,
  Pedido,
  PedidosDiv,
  Title,
  TipoDiv,
  Tipo,
  ItemPedido,
  Status,
} = Components;

const PedidoSection = () => {
  return (
    <a href="/pedidos/dados">
      <Section>
        <Pedido>
          <Title>Pedido - 01</Title>
          <PedidosDiv>
            <TipoDiv>
              <Tipo>Pizza</Tipo>
              <ItemPedido>Lombinho Cremoso</ItemPedido>
              <ItemPedido>4 Queijos</ItemPedido>
              <ItemPedido>Calabacon</ItemPedido>
            </TipoDiv>
            <TipoDiv>
              <Tipo>Refrigerante</Tipo>
              <ItemPedido>Coca-Cola 2L</ItemPedido>
              <ItemPedido>Conquista 2L</ItemPedido>
            </TipoDiv>
            <TipoDiv>
              <Tipo>Suco</Tipo>
              <ItemPedido>Suco de Laranja 1L</ItemPedido>
            </TipoDiv>
          </PedidosDiv>
        </Pedido>
        <Pedido alignItems="center">
          <Status>Status</Status>
          <ItemPedido>Em Produção</ItemPedido>
        </Pedido>
      </Section>
    </a>
  );
};

export default PedidoSection;
