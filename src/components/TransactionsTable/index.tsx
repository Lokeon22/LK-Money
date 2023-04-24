import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../Pagination";

import { Container, ContentMobile } from "./style";
import { TransactionMobile } from "../TransactionMobile";
import { TableBody } from "../TableBody";

import { DataProps } from "../../models/ItensType";

interface TransactionProps {
  keyRefresh: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TransactionsTable({ keyRefresh }: TransactionProps) {
  const [select, setSelect] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const { itens, itensFiltered, currentItens, pagesFilter, setCurrentPage } =
    usePagination<DataProps>(keyRefresh, select, page);

  function nextPage(itemLenght: number) {
    if (itemLenght === 6) {
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
              <td>Não há transações recentes...</td>
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

      <ContentMobile>
        <header>
          <h2>Listagem</h2>
          {itensFiltered.length <= 0 ? (
            <p>{itens.length} itens</p>
          ) : (
            <p>{itensFiltered.length} itens</p>
          )}
        </header>
        <section>
          {itens.length <= 0 && (
            <div>
              <p>Não há transações recentes...</p>
            </div>
          )}
          {itensFiltered.length <= 0 ? (
            <>
              {itens.map((item) => {
                return <TransactionMobile key={item.id} item={item} />;
              })}
            </>
          ) : (
            currentItens.map((item) => {
              return <TransactionMobile key={item.id} item={item} />;
            })
          )}
        </section>
      </ContentMobile>

      <nav>
        {itensFiltered.length <= 0 && (
          <nav>
            <FaArrowRight onClick={previousPage} />
            {page}
            <FaArrowRight onClick={() => nextPage(itens.length)} />
          </nav>
        )}
        {pagesFilter > 1 && (
          <Pagination
            pagesFilter={pagesFilter}
            setCurrentPage={setCurrentPage}
          />
        )}
      </nav>
    </Container>
  );
}
