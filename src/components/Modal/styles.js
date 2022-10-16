import styled, { keyframes } from 'styled-components';

const modalAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.section`
  background: rgba(0, 0, 0, .8);
  display: ${({ modal }) => (modal ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  padding: 1rem;
`;

export const ModalArea = styled.div`
  background: ${({ theme }) => theme.colors.lightColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  max-width: 500px;
  text-align: center;
  border-radius: 6px;
  animation: ${modalAnimation} 0.4s forwards;
`;

export const ModalClose = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: block;
    background: transparent;
    font-size: 1.75rem;
    padding: .625rem;

    svg {
      display: block;
    }
  }
`;

export const ModalContent = styled.div`
  padding: 1rem 2rem 1.5rem 2rem;

  p {
    margin-top: .5rem;
  }
`;

export const ModalActions = styled.div`
  padding-top: 1.25rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    padding: .5rem .75rem;
    border-radius: 8px;
    opacity: .9;
    transition: .3s;

    &:hover {
      opacity: 1;
    }

    &:first-of-type {
      background: ${({ theme }) => theme.colors.tomatoColor};
      color: ${({ theme }) => theme.colors.lightColor};
    }

    &:last-of-type {
      background: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.lightColor};
    }
  }
`;
