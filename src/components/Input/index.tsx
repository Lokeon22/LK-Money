import { Container } from "./style";

interface InputProps {
  text: string;
  type: "text" | "number";
}

export function Input({ text, type }: InputProps) {
  return <Container placeholder={text} type={type}></Container>;
}
