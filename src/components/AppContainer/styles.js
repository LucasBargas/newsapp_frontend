import styled from 'styled-components';

export const AppContainerArea = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;

  @media (max-width: 1536px) {
    max-width: 1140px;
  }

  @media (max-width: 1366px) {
    max-width: 1100px;
  }

  @media (max-width: 1200px) {
    max-width: none;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media (max-width: 700px) {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }

  @media (max-width: 500px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 300px) {
    padding-right: .875rem;
    padding-left: .875rem;
  }
`;
