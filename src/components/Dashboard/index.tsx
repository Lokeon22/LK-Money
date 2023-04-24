import { Container, CardContainer } from "./style";
import { useState } from "react";
import { getDataPrices } from "../../hook/calculationPrices";

import { Card } from "../Card";
import { TransactionsTable } from "../TransactionsTable";
import { Modal } from "../Modal";

import entradaIcon from "../../assets/entrada.svg";
import saidaIcon from "../../assets/saida.svg";
import moneyIcon from "../../assets/money.svg";

interface DashboardProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Dashboard({ modal, setModal }: DashboardProps) {
  const [keyRefresh, setKeyRefresh] = useState<boolean>(false);

  const { typePrice: entradaPrice, convertCurrency } = getDataPrices({
    type: "entry",
    keyRefresh,
  });

  const { typePrice: saidaPrice } = getDataPrices({
    type: "exit",
    keyRefresh,
  });

  const { currencyFormated: entradas } = convertCurrency(entradaPrice);

  const { currencyFormated: saidas } = convertCurrency(saidaPrice);

  const totalValue = entradaPrice - saidaPrice;
  const { currencyFormated: total } = convertCurrency(totalValue);

  return (
    <Container>
      {modal && (
        <Modal
          setModal={setModal}
          keyrefresh={keyRefresh}
          setKeyRefresh={setKeyRefresh}
        />
      )}
      <CardContainer>
        <Card text="Entradas" icon={entradaIcon} total={entradas} />
        <Card text="Saidas" icon={saidaIcon} total={saidas} />
        <Card text="Total" icon={moneyIcon} total={total} />
      </CardContainer>
      <TransactionsTable keyRefresh={keyRefresh} setModal={setModal} />
    </Container>
  );
}
