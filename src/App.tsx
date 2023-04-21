import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { useState } from "react";

export function App() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header setModal={setModal} />
      <Dashboard modal={modal} setModal={setModal} />
      <GlobalStyle />
    </>
  );
}
