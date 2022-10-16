import styled, { keyframes } from 'styled-components';

const loadingIcon = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  padding-top: 2rem;
  width: 80px;
  height: 80px;
  margin: 0 auto;

  &:after {
    content: " ";
    display: block;
    width: 40px;
    height: 40px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.primaryColor};
    border-color: ${({ theme }) => theme.colors.primaryColor} transparent ${({
  theme,
}) => theme.colors.primaryColor} transparent;
    animation: ${loadingIcon} 1.2s linear infinite;
  }
`;
