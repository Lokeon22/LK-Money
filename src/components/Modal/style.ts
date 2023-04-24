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
  width: 100%;
  max-width: 576px;
  position: fixed;
  display: flex;
  background: var(--background);
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.25rem;

  animation: ${ChangeOpacity} 0.3s ease;

  @media screen and (max-width: 640px) {
    top: 42%;
    left: 0;
    transform: translate(0%, 0%);
    bottom: 0;
    border-radius: 1.5rem 1.5rem 0rem 0rem;
  }

  @media screen and (max-width: 340px) {
    top: 22%;
  }
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  padding: 4rem 3rem;

  > img {
    position: fixed;
    top: 5px;
    left: 92%;
    cursor: pointer;
  }

  @media screen and (max-width: 640px) {
    padding: 1.5rem;

    > img {
      left: 89%;
    }
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  > form {
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
