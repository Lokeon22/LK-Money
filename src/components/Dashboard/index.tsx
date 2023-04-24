import { Container, CardContainer } from "./style";
import { useState } from "react";
import { getDataPrices } from "../../hooks/calculationPrices";

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

  const { typePrice: entradaPrice, currencyFormated: entrada } = getDataPrices({
    type: "entry",
    keyRefresh,
  });

  const { typePrice: saidaPrice, currencyFormated: saida } = getDataPrices({
    type: "exit",
    keyRefresh,
  });

  const totalValue = entradaPrice - saidaPrice;
  const total = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalValue);

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
        <Card text="Entradas" icon={entradaIcon} total={entrada} />
        <Card text="Saidas" icon={saidaIcon} total={saida} />
        <Card text="Total" icon={moneyIcon} total={total} />
      </CardContainer>
      <TransactionsTable keyRefresh={keyRefresh} setModal={setModal} />
    </Container>
  );
}
