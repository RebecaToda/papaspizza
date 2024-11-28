import { useNavigate } from "react-router-dom"; // Importando o hook
import Components from "./style.ts";

const { ButtonStyled } = Components;

interface Props {
  children: string;
  to: string; // Propriedade para a rota para onde o botão deve redirecionar
}

const Button = ({ children, to }: Props) => {
  const navigate = useNavigate(); // Usando o hook de navegação

  const handleClick = () => {
    navigate(to); // Redireciona para a rota indicada
  };

  return (
    <ButtonStyled type="button" onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
