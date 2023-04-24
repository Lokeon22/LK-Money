import { Container } from "./style";
import { DataProps } from "../../models/ItensType";

interface TransactionProps {
  item: DataProps;
}

export function TransactionMobile({ item }: TransactionProps) {
  return (
    <Container>
      <h2>{item.name}</h2>
      <p className={item.type == "entry" ? "entrada" : "retirada"}>
        {item.type == "entry" ? `R$ ${item.price}` : `- R$ ${item.price}`}
      </p>
      <footer>
        <span>{item.category}</span>
        <span>
          {new Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}
        </span>
      </footer>
    </Container>
  );
}
