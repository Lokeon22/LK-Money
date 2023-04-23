import { Container, Content } from "./style";

import logo from "../../assets/logo.svg";
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
        <img src={logo} alt="lk money" />
        <Button handleModal={handleModal} />
      </Content>
    </Container>
  );
}
