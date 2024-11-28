import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import Components from "./style";

const {
  Registro,
  Campos,
  Title,
  Line,
  InputDiv,
  NomeCampo,
  InputNormal,
  Precos,
} = Components;

export const Pizza = () => {
  return (
    <div>
      <Header />
      <Registro>
        <Campos>
          <Title>Registro Pizza</Title>
          <Line></Line>
          <InputDiv>
            <NomeCampo>Nome da Pizza</NomeCampo>
            <InputNormal />
          </InputDiv>
          <Precos>
            <InputDiv>
              <NomeCampo>Preço 4 pedaços</NomeCampo>
              <InputNormal />
            </InputDiv>
            <InputDiv>
              <NomeCampo>Preço 8 pedaços</NomeCampo>
              <InputNormal />
            </InputDiv>
          </Precos>
          <InputDiv>
            <NomeCampo>Ingredientes</NomeCampo>
            <InputNormal height="170px" />
          </InputDiv>
        </Campos>
      </Registro>
      <Footer />
    </div>
  );
};

export default Pizza;
