import Components from "./style.ts";

const { FooterPapa, ColumnSection, Logo, Instagram, Negrito, Info, CopyR } =
  Components;

const Footer = () => {
  return (
    <footer>
      <FooterPapa>
        <div className="infos">
          <ColumnSection>
            <Logo src="/src/assets/logo/logobranca.png" />
            <Instagram>
              <img src="/src/assets/logo/ig.png" alt="instagram logo" />
              <p>papaspizzaria</p>
            </Instagram>
          </ColumnSection>
          <ColumnSection>
            <Negrito>Telefone</Negrito>
            <Info>(14) 91234-5678</Info>
            <Info>(14) 91234-5678</Info>
            <Info>(14) 3123-4567</Info>
          </ColumnSection>
          <ColumnSection>
            <Negrito>Horário de Funcionamento</Negrito>
            <Info>Segunda à quinta das 18hrs às 23hrs</Info>
            <Info>Sexta, Sábado e Domingo das 18hrs às 00h</Info>
          </ColumnSection>
        </div>
        <CopyR>@2024 - Desenvolvido por Fatec Ourinhos</CopyR>
      </FooterPapa>
    </footer>
  );
};

export default Footer;
