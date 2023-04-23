import styled from "styled-components";

export const Container = styled.button`
  padding: 0 2rem;
  height: 3rem;
  font-size: 1rem;
  border: 0;
  background: var(--blue-light);
  color: #fff;
  border-radius: 0.25rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
