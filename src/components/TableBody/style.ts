import styled from "styled-components";

export const Container = styled.tr`
  td {
    padding: 1rem 2rem;
    background: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    color: var(--text-body);
    font-weight: 400;

    &:first-child {
      color: var(--text-title);
    }

    &.entrada {
      color: var(--green);
    }

    &.retirada {
      color: var(--red);
    }
  }
`;
