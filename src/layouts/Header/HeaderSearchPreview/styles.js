import styled from 'styled-components';

export const HeaderSearchPreviewContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.lightColor};
  border-radius: 4px;
  padding: .5rem .75rem;
  font-size: .875rem;
  z-index: 10001;
  box-shadow: ${({ theme }) => theme.colors.shadow};

  ul {
    display: block;

    li {
      margin-top: 2px;

      a {
        display: block;
        width: 80%;
        color: #222222;
        padding: .325rem 0;
      }
    }
  }
`;

export const HeaderSearchPreviewErr = styled.span`
  display: block;
  position: static !important;
  color: #222222 !important;
  font-size: .875rem !important;
  width: 85%;
`;

export const HeaderSearchPreviewCloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 2px;
  font-size: 1.325rem;
  background: transparent;
  color: #222222;
  z-index: 1002;
`;
