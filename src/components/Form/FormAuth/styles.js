import styled from 'styled-components';

export const FormNewsContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightColor};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 6px;
  max-width: 550px;
  padding: 1.5rem 1rem;
  margin: 0 auto;

  h1, p {
    text-align: center;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin-top: .25rem;
  }
`;

export const FormNewsArea = styled.form`
  width: 100%;
  padding-top: 1.25rem;
`;

export const Redirect = styled.div`
  padding-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
