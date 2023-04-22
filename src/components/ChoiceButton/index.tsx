import { Container } from "./style";

interface ButtonProps {
  text: string;
  icon: string;
  value: "entry" | "exit";
  handleValue: (
    value: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export function ChoiceButton({ text, icon, value, handleValue }: ButtonProps) {
  return (
    <Container
      onClick={(e) => handleValue(value, e)}
      type="button"
      value={value}
    >
      {text}
      <img src={icon} />
    </Container>
  );
}
