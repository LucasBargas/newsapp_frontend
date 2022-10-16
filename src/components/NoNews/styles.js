import styled from 'styled-components';

export const NoNewsContainer = styled.div`
  color: ${({ theme }) => theme.colors.primaryColor};

  h1 {
    font-size: 1.5rem;
  }

  p {
    margin-top: .5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
