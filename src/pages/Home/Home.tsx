import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/button/Button";
import Components from "./style";

const { PizzaSection, Title } = Components;

export const Home = () => {
  return (
    <div>
      <Header />
      <PizzaSection>
        <div>
          <Title>A Melhor Pizza de Ourinhos</Title>
          <div className="button">
            <Button to="/">Cardápio</Button>
            <Button to="/">Contato</Button>
          </div>
        </div>
      </PizzaSection>
      <Footer />
    </div>
  );
};

export default Home;
