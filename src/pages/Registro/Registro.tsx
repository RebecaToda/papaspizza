import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Components from "./style";

const { SectionRegistro, Cards, Itens } = Components;

export const Registro = () => {
  return (
    <div>
      <Header />
      <SectionRegistro>
        <Cards>
          <img src="/src/assets/images/registro/pizzas.png" alt="pizza" />
          <Itens>Pizzas</Itens>
        </Cards>
        <Cards>
          <img src="/src/assets/images/registro/bebidas.png" alt="bebidas" />
          <Itens>Bebidas</Itens>
        </Cards>
        <Cards>
          <img src="/src/assets/images/registro/porcoes.png" alt="porções" />
          <Itens>Porções</Itens>
        </Cards>
        <Cards>
          <img
            src="/src/assets/images/registro/sobremesas.png"
            alt="sobremesas"
          />
          <Itens>Sobremesas</Itens>
        </Cards>
      </SectionRegistro>
      <Footer />
    </div>
  );
};

export default Registro;
