import { useNavigate } from "react-router-dom"; // Importando o hook
import Components from "./style.ts";

const { ButtonStyled } = Components;

interface Props {
  children: string;
  to: string;
}

const Button = ({ children, to }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <ButtonStyled type="button" onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
