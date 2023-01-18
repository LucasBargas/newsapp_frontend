import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.strongGray};
  padding: 1.75rem 0;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: .875rem;
  text-align: center;
  gap: .25rem;

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    padding-top: .5rem;
    display: flex;
    flex-direction: column;
    gap: .25rem;
  }
`;
