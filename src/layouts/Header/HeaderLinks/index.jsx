import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import { BiSearch, BiUser } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import HeaderSearchPreview from '../HeaderSearchPreview';
import useUserAuthContext from '../../../hooks/useUserAuthContexts';

const HeaderLinks = ({ opened, setOpened }) => {
  const { authenticated, logout } = useUserAuthContext();
  const [input, setInput] = useState('');
  const [inputEmpty, setInputEmpty] = useState(false);
  const [searchPreview, setSearchPreview] = useState(false);
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.length === 0) {
      setInputEmpty(true);
      setSearchPreview(false);
      return;
    }

    setInputEmpty(false);
    navigate(`/search?q=${input}`);
    setInput('');
    setOpened(false);
  };

  const handleChange = ({ target }) => {
    setInput(target.value);
    setInputEmpty(false);
    setSearchPreview(true);
  };

  const handleClearInput = () => {
    setInput('');
    inputRef.current.focus();
  };

  const handleSearchPreview = () => {
    setSearchPreview(false);
    inputRef.current.focus();
  };

  useEffect(() => {
    const handleDocClick = ({ target }) => {
      if (!target.closest('div#search-preview')) {
        setSearchPreview(false);
      }
    };

    document.addEventListener('click', handleDocClick);
    return () => document.removeEventListener('click', handleDocClick);
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') handleSearchPreview();
  };

  const handleLogout = () => {
    logout();
    setOpened(false);
  };

  return (
    <S.HeaderLinksContainer>
      <S.HeaderLinksArea opened={opened}>
        <S.HeaderLinksList>
          {authenticated ? (
            <>
              <li>
                <NavLink to="/dashboard" onClick={() => setOpened(false)}>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  end
                  to="/cadastrar-noticia"
                  onClick={() => setOpened(false)}
                >
                  Cadastrar notícia
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/entrar" onClick={() => setOpened(false)}>
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink to="/cadastrar" onClick={() => setOpened(false)}>
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}
        </S.HeaderLinksList>

        <S.HeaderLinksForm>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleChange}
              onBlur={() => setInputEmpty(false)}
              placeholder="Pesquise por uma notícia"
              onKeyDown={handleKeyDown}
            />
            {inputEmpty && <span>Você precisa procurar por uma notícia</span>}
          </form>

          <S.SearchButton>
            <BiSearch />
          </S.SearchButton>

          {input.length > 0 && (
            <S.ClearInputButton onClick={handleClearInput}>
              <IoClose />
            </S.ClearInputButton>
          )}

          {searchPreview && input.length > 0 && (
            <HeaderSearchPreview
              id="search-preview"
              input={input}
              setOpened={setOpened}
              closePreview={handleSearchPreview}
            />
          )}
        </S.HeaderLinksForm>

        {authenticated && (
          <S.HeaderLinksAuthenticated>
            <li>
              <NavLink
                title="Editar usuário"
                to="/usuario/editar"
                onClick={() => setOpened(false)}
              >
                <BiUser />
              </NavLink>

              <NavLink to="/usuario/editar" onClick={() => setOpened(false)}>
                Editar usuário
              </NavLink>
            </li>

            <li>
              <button title="Sair" onClick={handleLogout}>
                <MdOutlineLogout />
              </button>

              <button onClick={handleLogout}>Sair</button>
            </li>
          </S.HeaderLinksAuthenticated>
        )}

        <S.MobileMedias>
          <ul>
            <li>
              <FaInstagramSquare />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
          </ul>
        </S.MobileMedias>
      </S.HeaderLinksArea>

      <S.MobileButton opened={opened} onClick={() => setOpened(!opened)}>
        <span></span>
      </S.MobileButton>
    </S.HeaderLinksContainer>
  );
};

export default HeaderLinks;
