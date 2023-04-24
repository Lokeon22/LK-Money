import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -8rem;

  @media screen and (max-width: 1024px) {
    gap: 1rem;
  }

  div:last-child {
    p {
      color: var(--shape);
    }
    background: var(--green);
    color: var(--shape);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex: none;
    overflow-x: auto;
  }
`;
