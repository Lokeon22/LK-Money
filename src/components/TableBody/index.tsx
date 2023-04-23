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
      <td>{data.created_at.slice(0, 10).split("-").reverse().join("/")}</td>
    </Container>
  );
}
