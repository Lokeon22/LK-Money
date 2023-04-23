import { useState, useEffect } from "react";

export function usePagination<T>(keyRefresh: boolean, select: string) {
  const [itens, setItens] = useState<T[]>([]);
  const [page, setPage] = useState<number>(1);

  async function getDataItens() {
    const res: T[] = await fetch(
      `http://localhost:3000/all?page=${page}&tipo=${select}`
    ).then((res) => res.json());
    setItens(res);
  }

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

  useEffect(() => {
    getDataItens();
  }, [keyRefresh, page, select]);

  return { itens, nextPage, previousPage, page, setPage };
}
