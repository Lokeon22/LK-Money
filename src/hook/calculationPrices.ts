import { useState, useEffect } from "react";
import { DataProps } from "../models/ItensType";

const baseURL = "http://localhost:3000";

interface DataPricesProps {
  type: string;
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
      let currencyFormated = +item.price.replace(".", "").replace(",", ".");
      return setTypePrice((priceTotal += currencyFormated));
    });
  }

  useEffect(() => {
    getActualPrice();
  }, [keyRefresh]);

  return { typePrice };
}
