import { Container, Content } from "./style";

import { Button } from "../Button";

interface HeaderProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ setModal }: HeaderProps) {
  function handleModal() {
    setModal(true);
  }

  return (
    <Container>
      <Content>
        <h2>
          <strong>LK</strong> money
        </h2>
        <Button handleModal={handleModal} />
      </Content>
    </Container>
  );
}
