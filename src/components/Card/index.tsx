import { Container } from "./style";

interface CardProps {
  text: string;
  icon: string;
  total: string;
}

export function Card({ text, icon, total }: CardProps) {
  return (
    <Container>
      <header>
        <p>{text}</p>
        <img src={icon} alt="logo" />
      </header>
      <strong>{total}</strong>
    </Container>
  );
}
