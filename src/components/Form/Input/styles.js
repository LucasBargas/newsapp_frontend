import styled from 'styled-components';

export const InputContainer = styled.div`
  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  label {
    display: block;
    font-size: .9375rem;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: .325rem;
  }

  input {
    display: block;
    padding: .625rem .625rem;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #949494;
  }
`;
