import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.strongGray};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 1000;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeaderNavLogo = styled.div`
  a {
    font-weight: 700;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const ButtonMobile = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`;
