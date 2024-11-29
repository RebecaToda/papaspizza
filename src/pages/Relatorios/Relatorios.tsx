import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/button/Button";
import Components from "./style";
const { Section, DadosRelatorio, Line, Title, Info, Dados, Bold } = Components;

export const Relatorios = () => {
  return (
    <div>
      <Header />
      <Section>
        <DadosRelatorio>
          <div>
            <Title>Relatório de Hoje</Title>
            <Line></Line>
          </div>
          <Info>
            <Dados>
              <Bold>Total de Pedidos: </Bold> 30
            </Dados>
            <Dados>
              <Bold>Total de Pizzas Vendidas: </Bold> 40
            </Dados>
            <Dados>
              <Bold>Total de Sucos Vendidos: </Bold> 10
            </Dados>
            <Dados>
              <Bold>Total de Refrigerantes Vendidos: </Bold> 10
            </Dados>
            <Dados>
              <Bold>Total de Bebidas Alcoólicas Vendidos: </Bold> 30
            </Dados>
            <Dados>
              <Bold>Total de Porções Pedidas: </Bold> 5
            </Dados>
            <Dados>
              <Bold>Total de Sobremesas Pedidas: </Bold> 10
            </Dados>
            <Dados>
              <Bold>Pizza Mais Vendida: </Bold> Calabacon
            </Dados>
            <Dados>
              <Bold>Suco Mais Vendido: </Bold> Acerola com Laranja
            </Dados>
            <Dados>
              <Bold>Refrigerante Mais Vendido: </Bold> Coca-Cola 2L
            </Dados>
            <Dados>
              <Bold>Bebida Alcoólica Mais Vendida: </Bold> Skol Beats Lata
            </Dados>
            <Dados>
              <Bold>Porção Mais Vendida: </Bold> Porção de Fritas com Bacon
            </Dados>
            <Dados>
              <Bold>Sobremesa Mais Vendida: </Bold> Porção de Mini Churross
            </Dados>
          </Info>
        </DadosRelatorio>
        <Button to="/">Imprimir</Button>
      </Section>

      <Footer />
    </div>
  );
};

export default Relatorios;
