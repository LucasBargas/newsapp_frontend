import styled from 'styled-components';

export const DashboardContainer = styled.section`
  color: ${({ theme }) => theme.colors.primaryColor};

  h1 {
    font-size: 1.5rem;
  }
`;

export const DashboardNoNews = styled.div`
  p {
    margin-top: .325rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 480px) {
    gap: 1rem;
    flex-direction: column;
  }

  p {
    margin-top: .325rem;
  }

  button {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.lightColor};
    padding: .75rem;
    border-radius: 8px;
    opacity: .8;
    transition: .3s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const DashboardArea = styled.div`
  padding-top: .5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DashboardNewsSingle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryColor};
  padding: 1.5rem 0;

  @media (max-width: 320px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.125rem;
  }
`;

export const DashboardNewsInfos = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.25rem;
  }

  span {
    margin-top: .25rem;
    display: block;
    font-size: .875rem;

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }
`;

export const DashboardNewsActions = styled.div`
  display: flex;
  align-items: center;
  gap: .625rem;

  @media (max-width: 480px) {
    gap: .875rem;
  }

  a, svg {
    display: block;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 1.5rem;
  }
`;
