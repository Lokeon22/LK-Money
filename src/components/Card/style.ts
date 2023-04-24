import styled from "styled-components";

export const Container = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text-title);
  }

  strong {
    display: block;
    font-size: 2.25rem;
    font-weight: 500;
    margin-top: 1rem;
  }

  @media screen and (max-width: 640px) {
    min-width: 260px;
  }
`;
