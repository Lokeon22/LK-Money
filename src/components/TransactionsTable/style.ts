import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
    color: var(--text-body);
    font-weight: 400;
  }

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
