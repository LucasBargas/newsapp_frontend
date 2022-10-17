import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Themes from './styles/Themes';
import FlashMessages from './layouts/FlashMessages';
import AppArea from './layouts/AppArea';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import Dashboard from './pages/Dashboard';
import UserEdit from './pages/UserEdit';
import News from './pages/News';
import NewsEdit from './pages/NewsEdit';
import RegisterNews from './pages/RegisterNews';
import useUserAuthContexts from './hooks/useUserAuthContexts';

const App = () => {
  const { authenticated } = useUserAuthContexts();

  return (
    <ThemeProvider theme={Themes}>
      <AppArea>
        <Header />
        <main>
          <FlashMessages />
          <Routes>
            <Route path="/" index element={<Homepage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/noticia/:id" element={<News />} />
            {!authenticated && (
              <>
                <Route path="/entrar" element={<Login />} />
                <Route path="/cadastrar" element={<Register />} />
              </>
            )}
            {authenticated && (
              <>
                <Route
                  path="/dashboard"
                  element={
                    authenticated ? <Dashboard /> : <Navigate to="/entrar" />
                  }
                />
                <Route
                  path="/usuario/editar"
                  element={
                    authenticated ? <UserEdit /> : <Navigate to="/entrar" />
                  }
                />
                <Route
                  path="/noticia/editar/:id"
                  element={
                    authenticated ? <NewsEdit /> : <Navigate to="/entrar" />
                  }
                />
                <Route
                  path="/cadastrar-noticia"
                  element={
                    authenticated ? <RegisterNews /> : <Navigate to="/entrar" />
                  }
                />
              </>
            )}
          </Routes>
        </main>
        <Footer />
      </AppArea>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
