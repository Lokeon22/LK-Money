import { Container } from "./style";

interface ButtonProps {
  text: string;
  icon: string;
  value: "Entry" | "Exit";
  handleValue: (value: string) => void;
}

export function ChoiceButton({ text, icon, value, handleValue }: ButtonProps) {
  return (
    <Container onClick={() => handleValue(value)} type="button" value={value}>
      {text}
      <img src={icon} />
    </Container>
  );
}
