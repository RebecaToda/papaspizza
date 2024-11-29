import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Components from "./style";
import Button from "../../../components/button/Button";

const {
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
} = Components;

export const Dados = () => {
  return (
    <div>
      <Header />
      <Section>
        <DadosPedido>
          <div>
            <Title>Pedido 01</Title>
            <Line></Line>
          </div>
          <PedidosDiv>
            <Status>
              <TipoDiv>
                <Tipo>Pizza</Tipo>
                <ItemPedido>Lombinho Cremoso</ItemPedido>
                <ItemPedido>4 Queijos</ItemPedido>
                <ItemPedido>Calabacon</ItemPedido>
              </TipoDiv>
              <Form>
                <InputDiv>
                  <Label>
                    <RadioButton name="option" value="option1" />
                    Na fila
                  </Label>
                  <Label>
                    <RadioButton name="option" value="option2" />
                    Em Produção
                  </Label>
                  <Label>
                    <RadioButton name="option" value="option3" />
                    Pronto
                  </Label>
                </InputDiv>
              </Form>
            </Status>
            <Status>
              <TipoDiv>
                <Tipo>Refrigerante</Tipo>
                <ItemPedido>Coca-Cola 2L</ItemPedido>
                <ItemPedido>Conquista 2L</ItemPedido>
              </TipoDiv>
              <Form>
                <InputDiv>
                  <Label>
                    <RadioButton name="option" value="option1" />
                    Na fila
                  </Label>
                  <Label>
                    <RadioButton name="option" value="option2" />
                    Em Produção
                  </Label>
                  <Label>
                    <RadioButton name="option" value="option3" />
                    Pronto
                  </Label>
                </InputDiv>
              </Form>
            </Status>
            <Status>
              <TipoDiv>
                <Tipo>Suco</Tipo>
                <ItemPedido>Suco de Laranja 1L</ItemPedido>
              </TipoDiv>
              <Form>
                <InputDiv>
                  <Label>
                    <RadioButton name="option" value="option1" />
                    Na fila
                  </Label>
                  <Label>
                    <RadioButton name="option" value="option2" />
                    Em Produção
                  </Label>
                  <Label>
                    <RadioButton name="option" value="option3" />
                    Pronto
                  </Label>
                </InputDiv>
              </Form>
            </Status>
          </PedidosDiv>
        </DadosPedido>
        <DadosPedido>
          <div>
            <Title>Dados do Cliente</Title>
            <Line></Line>
          </div>
          <Cliente>
            <Bold>Cliente: </Bold> João Fulano
          </Cliente>
          <Cliente>
            <Bold>Endereço: </Bold> Avenida Brasil, 123, Bairro Qualquer,
            Ourinhos - SP
          </Cliente>
          <Cliente>
            <Bold>Método de Pagamento: </Bold> Cartão de Crédito
          </Cliente>
          <BotaoDiv>
            <Button to="/">Pronto pra Entrega</Button>
            <Button to="/">Entregue</Button>
          </BotaoDiv>
        </DadosPedido>
      </Section>
      <Footer />
    </div>
  );
};

export default Dados;
