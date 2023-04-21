import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  background: var(--background);
  border: 0.1rem solid var(--text-body);
  border-radius: 0.25rem;
  padding: 0.875rem;
  cursor: pointer;

  > img {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    left: 60px;
  }
`;
