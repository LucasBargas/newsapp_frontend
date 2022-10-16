import styled from 'styled-components';

export const NewsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightColor};
  color: ${({ theme }) => theme.colors.primaryColor};
  padding: 1.5rem 1.25rem 1rem 1.25rem;
  height: 100%;
  min-height: 400px;
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.colors.shadow};

  h3 {
    font-size: 1.25rem;
  }

  p {
    margin-top: .5rem;
    flex: 1;
  }
`;

export const NewsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 1rem;
  font-size: .875rem;

  div {
    display: flex;
    flex-direction: column;
    gap: .325rem;

    p {
      margin: 0;

      span {
        text-transform: capitalize;
      }
    }
  }
`;

export const NewsActionsBtn = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  a {
    display: block;
    padding: .5rem;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 1.5rem;
    background: transparent;

    svg {
      display: block;
      color: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`;
