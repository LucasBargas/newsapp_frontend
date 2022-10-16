import styled from 'styled-components';

export const TextareaContainer = styled.div`
  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  label {
    display: block;
    font-size: .9375rem;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-bottom: .325rem;
  }

  textarea {
    display: block;
    padding: .625rem .625rem;
    width: 100%;
    border-radius: 4px;
    resize: none;
    border: 1px solid #949494;
  }
`;
