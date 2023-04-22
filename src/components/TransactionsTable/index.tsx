import { useState, useEffect } from "react";
import { Container } from "./style";
import { DataProps } from "../../models/ItensType";

interface TransactionProps {
  keyRefresh: boolean;
}

export function TransactionsTable({ keyRefresh }: TransactionProps) {
  const [itens, setItens] = useState<DataProps[]>([]);

  async function getDataItens() {
    const res: DataProps[] = await fetch("http://localhost:3000/all").then(
      (res) => res.json()
    );
    setItens(res);
  }

  useEffect(() => {
    getDataItens();
  }, [keyRefresh]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {itens.length > 0 &&
            itens.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className={item.type == "entry" ? "entrada" : "retirada"}>
                    {item.type == "entry"
                      ? `R$ ${item.price}`
                      : `- R$ ${item.price}`}
                  </td>
                  <td>{item.category}</td>
                  <td>{item.created_at.slice(0, 10)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
}
