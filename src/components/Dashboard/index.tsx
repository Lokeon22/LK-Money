import { Container } from "./style";
import { Card } from "../Card";
import { TransactionsTable } from "../TransactionsTable";
import { Modal } from "../Modal";

interface DashboardProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Dashboard({ modal, setModal }: DashboardProps) {
  return (
    <Container>
      {modal && <Modal setModal={setModal} />}
      <Card />
      <TransactionsTable />
    </Container>
  );
}
