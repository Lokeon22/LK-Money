import logo from "../../assets/logo.svg";

import { Container, Content } from "./style";

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
        <button type="button" onClick={handleModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
