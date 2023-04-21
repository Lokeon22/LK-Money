import styled, { keyframes } from "styled-components";

const ChangeOpacity = keyframes`
  from {opacity: 0;};
  to {opacity: 1;};
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  background: var(--background);
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.25rem;

  animation: ${ChangeOpacity} 0.3s ease;
`;

export const Content = styled.div`
  position: relative;
  padding: 4rem 3rem;

  > img {
    position: fixed;
    top: 5px;
    left: 92%;
    cursor: pointer;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const ButtonCadastro = styled.button`
  padding: 1.25rem 0;
  background: var(--green);
  color: var(--shape);
  border-radius: 0.25rem;
  border: none;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;