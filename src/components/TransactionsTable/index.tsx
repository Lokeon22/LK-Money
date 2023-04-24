import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { usePagination } from "../../hooks/usePagination";

import { Container } from "./style";
import { TableBody } from "../TableBody";
import { Button } from "../Button";

import { DataProps } from "../../models/ItensType";

interface TransactionProps {
  keyRefresh: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TransactionsTable({ keyRefresh, setModal }: TransactionProps) {
  const [select, setSelect] = useState<string>("");

  const { itens, nextPage, previousPage, page, setPage } =
    usePagination<DataProps>(keyRefresh, select);

  function handleModal() {
    setModal(true);
  }

  return (
    <Container>
      <div>
        <h2>Filtrar por</h2>
        <select
          required
          value={select}
          onChange={({ target }) => {
            setSelect(target.value);
            setPage(1);
          }}
        >
          <option value="">Transações</option>
          <option value="entry">Entradas</option>
          <option value="exit">Saidas</option>
        </select>
      </div>
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
          {itens.length <= 0 && (
            <tr>
              <td>Não há mais transações recentes... </td>
              <td>
                <Button handleModal={handleModal} />
              </td>
            </tr>
          )}
          {itens.map((item) => {
            return <TableBody key={item.id} data={item} />;
          })}
        </tbody>
      </table>

      <nav>
        <FaArrowRight onClick={previousPage} />
        {page}
        <FaArrowRight onClick={() => nextPage(itens.length)} />
      </nav>
    </Container>
  );
}
