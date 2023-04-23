import { useState, useEffect } from "react";
import { DataProps } from "../models/ItensType";

export function usePagination<T>(
  keyRefresh: boolean,
  select: string,
  page: number
) {
  const [itens, setItens] = useState<T[]>([]);
  const [itensFiltered, setItensFiltered] = useState<DataProps[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(0);

  // pages from entry or exit filtered
  const itensPerPage = 6;
  const pagesFilter = Math.ceil(itensFiltered.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itensFiltered.slice(startIndex, endIndex);

  //getAll transactions
  async function getDataItens() {
    const res: T[] = await fetch(`http://localhost:3000/all?page=${page}`).then(
      (res) => res.json()
    );
    setItens(res);
  }

  //getData from entry or page filtered
  async function getDataItensFiltered(select: string) {
    const res: DataProps[] = await fetch("http://localhost:3000/all").then(
      (res) => res.json()
    );

    let filtered = res.filter((tipo) => tipo.type === select);
    setItensFiltered(filtered);
    setCurrentPage(0);
  }

  useEffect(() => {
    getDataItens();
    getDataItensFiltered(select);
  }, [keyRefresh, page, select, setCurrentPage]);

  return {
    itens,
    itensFiltered,
    currentItens,
    setCurrentPage,
    pagesFilter,
  };
}
