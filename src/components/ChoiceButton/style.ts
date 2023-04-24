import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;

  button {
    width: 100%;
    text-align: center;
    font-size: 0.875rem;
    background: var(--background);
    border: 0.1rem solid var(--text-body);
    border-radius: 0.25rem;
    padding: 0.875rem;
    cursor: pointer;
    &:focus {
      background: var(--text-body);
      color: var(--shape);
    }

    > img {
      position: absolute;
      left: 4rem;
      width: 1.25rem;
      height: 1.25rem;

      @media screen and (max-width: 640px) {
        left: 2.2rem;
      }

      @media screen and (max-width: 330px) {
        left: 1.7rem;
      }
    }
  }
`;
