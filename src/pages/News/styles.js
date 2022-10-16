import styled from 'styled-components';
import { NewsCardContainer } from '../../components/NewsCard/styles';

export const NewsContainer = styled.section`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  ${NewsCardContainer} {
    min-height: 450px;
  }
`;
