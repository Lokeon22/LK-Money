import { Input } from "../Input";
import { ChoiceButton } from "../ChoiceButton";
import { Container, Content, Overlay, ButtonCadastro } from "./style";

import entrada from "../../assets/entrada.svg";
import saida from "../../assets/saida.svg";
import close from "../../assets/close.svg";

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ setModal }: ModalProps) {
  function handleOutsideClick(event: React.MouseEvent) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  function handleValue(value: string) {
    console.log(value);
  }

  return (
    <Overlay onClick={handleOutsideClick}>
      <Container>
        <Content>
          <img onClick={() => setModal(false)} src={close} alt="Close Modal" />
          <h2>Cadastrar transação</h2>
          <div>
            <Input type="text" text="Nome" />
            <Input type="number" text="Preço" />

            <nav>
              <ChoiceButton
                handleValue={handleValue}
                text="Entrada"
                icon={entrada}
                value="Entry"
              />
              <ChoiceButton
                handleValue={handleValue}
                text="Saida"
                icon={saida}
                value="Exit"
              />
            </nav>

            <Input type="text" text="Categoria" />
            <ButtonCadastro>Cadastrar</ButtonCadastro>
          </div>
        </Content>
      </Container>
    </Overlay>
  );
}
