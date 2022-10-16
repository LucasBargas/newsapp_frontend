import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Light from './styles/Themes/Light';
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
    <ThemeProvider theme={Light}>
      <AppArea>
        <Header />
        <main>
          <FlashMessages />
          <Routes>
            <Route path="/" index element={<Homepage />} />
            <Route
              path="/entrar"
              element={authenticated ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/cadastrar"
              element={authenticated ? <Navigate to="/" /> : <Register />}
            />
            <Route
              path="/search"
              element={!authenticated ? <Navigate to="/entrar" /> : <Search />}
            />
            <Route
              path="/dashboard"
              element={
                !authenticated ? <Navigate to="/entrar" /> : <Dashboard />
              }
            />
            <Route
              path="/usuario/editar"
              element={
                !authenticated ? <Navigate to="/entrar" /> : <UserEdit />
              }
            />
            <Route
              path="/noticia/:id"
              element={!authenticated ? <Navigate to="/entrar" /> : <News />}
            />
            <Route
              path="/noticia/editar/:id"
              element={
                !authenticated ? <Navigate to="/entrar" /> : <NewsEdit />
              }
            />
            <Route
              path="/cadastrar-noticia"
              element={
                !authenticated ? <Navigate to="/entrar" /> : <RegisterNews />
              }
            />
          </Routes>
        </main>
        <Footer />
      </AppArea>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
