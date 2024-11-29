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
  Form,
  Label,
  RadioButton,
} = Components;

export const Bebida = () => {
  return (
    <div>
      <Header />
      <Registro>
        <Campos>
          <Title>Registro Bebidas</Title>
          <Line></Line>
          <InputDiv>
            <NomeCampo>Nome da Bebida</NomeCampo>
            <InputNormal />
          </InputDiv>
          <Precos>
            <InputDiv>
              <NomeCampo>Preço </NomeCampo>
              <InputNormal placeholder="R$" width="50%" />
            </InputDiv>
          </Precos>
          <Form>
            <InputDiv>
              <NomeCampo>Tipo</NomeCampo>
              <div>
                <Label>
                  <RadioButton name="suco" value="suco" />
                  Suco
                </Label>
                <Label>
                  <RadioButton name="option" value="option2" />
                  Refrigerante
                </Label>
                <Label>
                  <RadioButton name="option" value="option3" />
                  Alcooólico
                </Label>
              </div>
            </InputDiv>
          </Form>
        </Campos>
        <img src="../../../../../public/bebida.png" alt="bebida" />
      </Registro>
      <Footer />
    </div>
  );
};

export default Bebida;
