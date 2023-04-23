import { Container } from "./style";

interface ButtonProps {
  handleModal: () => void;
}

export function Button({ handleModal }: ButtonProps) {
  return (
    <Container type="button" onClick={handleModal}>
      Nova transação
    </Container>
  );
}
