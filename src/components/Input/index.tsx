import { ComponentPropsWithoutRef } from "react";
import { Container } from "./style";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

export function Input({ ...rest }: InputProps) {
  return <Container {...rest}></Container>;
}
