import { Container } from "./style";
import { DataProps } from "../../models/ItensType";

interface TableBodyProps {
  data: DataProps;
}

export function TableBody({ data }: TableBodyProps) {
  return (
    <Container>
      <td>{data.name}</td>
      <td className={data.type == "entry" ? "entrada" : "retirada"}>
        {data.type == "entry" ? `R$ ${data.price}` : `- R$ ${data.price}`}
      </td>
      <td>{data.category}</td>
      <td>
        {new Intl.DateTimeFormat("pt-BR").format(new Date(data.created_at))}
      </td>
    </Container>
  );
}
