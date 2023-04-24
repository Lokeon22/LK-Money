import { useState, useEffect } from "react";
import { DataProps } from "../models/ItensType";

const baseURL: string = "http://localhost:3000";

interface DataPricesProps {
  type: "entry" | "exit";
  keyRefresh: boolean;
}

export function getDataPrices({ type, keyRefresh }: DataPricesProps) {
  const [typePrice, setTypePrice] = useState<number>(0);

  async function getActualPrice() {
    let priceTotal = 0;
    const res: DataProps[] = await fetch(`${baseURL}/all?tipo=${type}`).then(
      (res) => res.json()
    );
    res.map((item) => {
      let priceFormated = +item.price.replace(".", "").replace(",", ".");
      return setTypePrice((priceTotal += priceFormated));
    });
  }

  const currencyFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(typePrice);

  useEffect(() => {
    getActualPrice();
  }, [keyRefresh]);

  return { typePrice, currencyFormated };
}
