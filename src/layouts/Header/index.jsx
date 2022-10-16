import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import HeaderLinks from './HeaderLinks';

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <S.HeaderContainer>
      <AppContainer>
        <S.HeaderNav>
          <S.HeaderNavLogo>
            <NavLink to="/" onClick={() => setOpened(false)}>
              NewsLBS
            </NavLink>
          </S.HeaderNavLogo>
          <HeaderLinks opened={opened} setOpened={setOpened} />
        </S.HeaderNav>
      </AppContainer>
    </S.HeaderContainer>
  );
};

export default Header;
