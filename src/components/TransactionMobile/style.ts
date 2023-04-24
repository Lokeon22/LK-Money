import styled from "styled-components";

export const Container = styled.div`
  background: var(--shape);
  border-radius: 0.25rem;
  padding: 1.125rem 1.5rem;

  h2 {
    font-size: 0.875rem;
  }

  p {
    font-size: 1.25rem;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.125rem;

    span {
      color: var(--text-body);
      font-size: 0.875rem;
    }
  }

  .entrada {
    color: var(--green);
  }

  .retirada {
    color: var(--red);
  }
`;
