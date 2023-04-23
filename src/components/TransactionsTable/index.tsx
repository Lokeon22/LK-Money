import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { usePagination } from "../../hook/usePagination";

import { Container } from "./style";
import { TableBody } from "../TableBody";
import { Pagination } from "../Pagination";
import { DataProps } from "../../models/ItensType";
import { Button } from "../Button";

interface TransactionProps {
  keyRefresh: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TransactionsTable({ keyRefresh, setModal }: TransactionProps) {
  const [select, setSelect] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { itens, itensFiltered, currentItens, pagesFilter, setCurrentPage } =
    usePagination<DataProps>(keyRefresh, select, page);

  function nextPage(itemData: number) {
    if (itemData === 6) {
      setPage(page + 1);
    }
    return;
  }

  function previousPage() {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
  }

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
          onChange={({ target }) => setSelect(target.value)}
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
          {itensFiltered.length <= 0 ? (
            <>
              {itens.map((item) => {
                return <TableBody key={item.id} data={item} />;
              })}
            </>
          ) : (
            currentItens.map((item) => {
              return <TableBody key={item.id} data={item} />;
            })
          )}
        </tbody>
      </table>
      {itensFiltered.length <= 0 && (
        <nav>
          <BsArrowLeft onClick={previousPage} />
          {page}
          <BsArrowRight onClick={() => nextPage(itens.length)} />
        </nav>
      )}
      {pagesFilter > 1 && (
        <Pagination pagesFilter={pagesFilter} setCurrentPage={setCurrentPage} />
      )}
    </Container>
  );
}
