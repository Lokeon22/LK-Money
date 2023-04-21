import { Container } from "./style";

import entrada from "../../assets/entrada.svg";
import saida from "../../assets/saida.svg";
import money from "../../assets/money.svg";

export function Card() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entrada} alt="logo" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={saida} alt="logo" />
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={money} alt="logo" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
