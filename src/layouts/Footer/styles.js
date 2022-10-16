import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.strongGray};
  padding: 1.5rem 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: .875rem;
    text-align: center;
    gap: .25rem;

    a {
      color: ${({ theme }) => theme.colors.primaryColor};

      &:last-of-type:hover {
        text-decoration: underline;
      }
    }

    p {
      a {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-weight: bold;
      }
    }
  }
`;
