import styled from 'styled-components';

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  button {
    padding: .5rem 1rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.lightColor};
    background: ${({ theme }) => theme.colors.primaryColor};
    opacity: .9;
    transition: .3s;

    &:hover {
      opacity: 1;
    }

    &:disabled {
      cursor: wait;
    }
  }
`;
