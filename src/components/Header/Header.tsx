import Components from "./style.ts";

const { HeaderPapa, Logo, Links, Link } = Components;

const Header = () => {
  return (
    <header>
      <HeaderPapa>
        <Logo src="/src/assets/logo/logopreta.png" alt="Logo Preta e Branca" />
        <section>
          <Links>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/">Cardápio</Link>
            </li>
            <li>
              <Link href="/">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/">Contato</Link>
            </li>
            <li>
              <Link href="/registro">Registro</Link>
            </li>
            <li>
              <Link href="/">Pedidos</Link>
            </li>
            <li>
              <Link href="/">Relatório</Link>
            </li>
          </Links>
        </section>
      </HeaderPapa>
    </header>
  );
};

export default Header;
