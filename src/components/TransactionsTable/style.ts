import styled from "styled-components";

export const Container = styled.div`
  margin-top: 2rem;

  > div {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    select {
      padding: 0.25rem;
      border-radius: 0.25rem;
    }
  }

  @media screen and (max-width: 769px) {
    table {
      display: none;
    }
  }

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

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    font-size: 1.1rem;

    svg:first-child {
      rotate: 180deg;
    }

    > svg {
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;
      &:hover {
        color: var(--blue-light);
        transition-delay: 0.2s;
      }
    }
  }
`;

export const ContentMobile = styled.section`
  @media screen and (min-width: 769px) {
    display: none;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
