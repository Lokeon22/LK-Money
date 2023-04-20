import { Container } from "./style";

export function TransactionsTable() {
  return (
    <Container>
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="entrada">R$12.000</td>
            <td>Venda</td>
            <td>22/11/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="retirada">- R$1.000</td>
            <td>Casa</td>
            <td>17/11/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
