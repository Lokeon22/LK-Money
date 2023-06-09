import styled from "styled-components";

export const Container = styled.header`
  background: var(--black);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--shape);

    strong {
      color: var(--gold);
    }
  }
`;
