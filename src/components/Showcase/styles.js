import styled from 'styled-components';

export const ShowcaseArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 1030px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    gap: 1.5rem;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }

  @media (max-width: 420px) {
    padding: 0;
  }
`;
