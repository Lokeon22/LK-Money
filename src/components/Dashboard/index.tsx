import { Container } from "./style";
import { Card } from "../Card";
import { TransactionsTable } from "../TransactionsTable";

export function Dashboard() {
  return (
    <Container>
      <Card />
      <TransactionsTable />
    </Container>
  );
}
