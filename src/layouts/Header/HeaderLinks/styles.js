import styled, { css } from 'styled-components';

export const HeaderLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const HeaderLinksArea = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    top: 5rem;
    left: 0;
    width: 100%;
    height: 0;
    overflow-y: hidden;
    visibility: hidden;
    background: ${({ theme }) => theme.colors.strongGray};
    padding: 0 1rem;
    transition: .4s;

    ${({ opened }) =>
      opened &&
      css`
      height: calc(100vh - 5rem);
      visibility: visible;
      overflow-y: auto;
      transition: .4s;
    `}
  }
`;

export const HeaderLinksList = styled.ul`
  display: flex;
  gap: .25rem;

  @media (max-width: 900px) {
    display: block;
  }

  li {
    a {
      display: block;
      color: ${({ theme }) => theme.colors.primaryColor};
      padding: .75rem 1rem;

      @media (max-width: 900px) {
        width: 100%;
        border-bottom: 2px solid ${({ theme }) => theme.colors.darkGray};
        padding: 1rem;
      }

      &.active {
        border-radius: 8px;
        background: ${({ theme }) => theme.colors.darkGray};
        color: ${({ theme }) => theme.colors.lightColor};

        @media (max-width: 900px) {
          border-radius: 4px;
        }
      }
    }
  }
`;

export const HeaderLinksForm = styled.div`
  position: relative;
  width: 320px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 1.25rem 0;
  }

  form {
    input {
      display: block;
      width: 100%;
      border-radius: 6px;
      padding: .75rem 4rem .75rem .625rem;
      background: ${({ theme }) => theme.colors.lightColor};

      @media (max-width: 900px) {
        width: 100%;
        border-radius: 4px;
        padding: .75rem 4.25rem .75rem .75rem;
      }
    }

    span {
      display: block;
      margin-top: 2px;
      position: absolute;
      color: ${({ theme }) => theme.colors.tomatoColor};
      font-size: .75rem;
    }
  }
`;

export const HeaderLinksAuthenticated = styled.ul`
  display: flex;
  align-items: center;
  gap: .5rem;

  @media (max-width: 900px) {
    display: block;
    gap: 0;

    a, button {
      width: 100%;
      border-bottom: 2px solid ${({ theme }) => theme.colors.darkGray};
      padding: 1rem !important;
      font-size: 1rem !important;
      text-align: left !important;
      font-weight: normal;

      &.active {
        border-radius: 4px;
        background: ${({ theme }) => theme.colors.darkGray};
        color: ${({ theme }) => theme.colors.lightColor};
      }
    }
  }

  li {
    a:last-of-type, button:last-of-type {
      display: none;

      @media (max-width: 900px) {
        display: block;
      }
    }

    a:first-of-type, button:first-of-type {
      display: block;

      @media (max-width: 900px) {
        display: none;
      }
    }

    button, a {
      display: block;
      background: transparent;
      color: ${({ theme }) => theme.colors.primaryColor};
      padding: .5rem .325rem;
      font-size: 1.5rem;

      svg {
        display: block;
      }
    }
  }
`;

export const MobileMedias = styled.div`
  display: none !important;
  padding-top: 3rem;

  @media (max-width: 900px) {
    display: flex !important;
  }

  ul {
    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
      gap: .5rem;
      flex: 1;
    }

    li {
      @media (max-width: 900px) {
        cursor: pointer;
        font-size: 2.25rem;
        color: ${({ theme }) => theme.colors.primaryColor};
      }
    }
  }
`;

export const MobileButton = styled.button`
  display: none;
  background: none;

  span {
    color: ${({ theme }) => theme.colors.primaryColor};
    display: block;
    border-top: 2px solid;
    width: 20px;

    &::after, &::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background: currentColor;
      margin-top: 5px;
      transition: .3s;
      position: relative;
    }
  }

  ${({ opened }) =>
    opened &&
    css`
    span {
      border-top-color: transparent;

      &::before {
        transform: rotate(135deg);
      }

      &::after {
        transform: rotate(-135deg);
        top: -7px;
      }
    }
  `}

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const ClearInputButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: calc(50% + 1px);
  right: 2.25rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 1rem;
  padding: 0 2px;
  cursor: pointer;

  @media (max-width: 900px) {
    right: 2.5rem;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  transform: translateY(-50%);
  top: calc(50% + 2px);
  right: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 1.325rem;
  padding: 0 .5rem;
  cursor: default;

  @media (max-width: 900px) {
    right: 5px;
  }
`;
