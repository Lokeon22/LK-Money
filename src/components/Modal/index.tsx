import { useState } from "react";
import { Input } from "../Input";
import { ChoiceButton } from "../ChoiceButton";
import { Container, Content, Overlay, ButtonCadastro } from "./style";

import entrada from "../../assets/entrada.svg";
import saida from "../../assets/saida.svg";
import close from "../../assets/close.svg";

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  keyrefresh: boolean;
  setKeyRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ setModal, setKeyRefresh, keyrefresh }: ModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  function handleOutsideClick(event: React.MouseEvent) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();

    if (!name || !price || !category) return alert("Preencha todos os campos");

    if (price.length < 4) return alert("Digite um preço válido. Exemplo: 1,00");

    if (!type) return alert("Selecione um tipo de transação");

    await fetch("http://localhost:3000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, type, category }),
    })
      .then(() => {
        setModal(false);
        setKeyRefresh(!keyrefresh);
      })
      .catch((error) => console.log(error));
  }

  function handleValue(
    value: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.currentTarget.focus();
    setType(value);
  }

  return (
    <Overlay onClick={handleOutsideClick}>
      <Container>
        <Content>
          <img onClick={() => setModal(false)} src={close} alt="Close Modal" />
          <h2>Cadastrar transação</h2>
          <form onSubmit={handleCreate}>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              type="text"
              placeholder="Preço"
              value={price}
              onChange={({ target }) =>
                setPrice(
                  target.value
                    .replace(/\D/g, "")
                    .replace(/(\d)(\d{2})$/, "$1,$2")
                    .replace(/(?=(\d{3})+(\D))\B/g, ".")
                )
              }
            />
            <Input
              type="text"
              placeholder="Categoria"
              value={category}
              onChange={({ target }) => setCategory(target.value)}
            />

            <nav>
              <ChoiceButton
                handleValue={handleValue}
                text="Entrada"
                icon={entrada}
                value="entry"
              />
              <ChoiceButton
                handleValue={handleValue}
                text="Saida"
                icon={saida}
                value="exit"
              />
            </nav>

            <ButtonCadastro type="submit">Cadastrar</ButtonCadastro>
          </form>
        </Content>
      </Container>
    </Overlay>
  );
}
