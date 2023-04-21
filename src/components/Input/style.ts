import styled from "styled-components";

export const Container = styled.input`
  width: 480px;
  padding: 1.25rem 1.5rem;
  outline: none;
  background: var(--bg-gray);
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  &::placeholder {
    color: var(--text-body);
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
