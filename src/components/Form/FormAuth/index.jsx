import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Input from '../Input';
import SubmitButton from '../SubmitButton';
import * as S from './styles';

const FormNews = ({
  handleSubmit,
  title,
  subtitle,
  name,
  confirmPassword,
  btnText,
  loading,
  login,
  register,
}) => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await handleSubmit(user);
  };

  return (
    <S.FormNewsContainer>
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}

      <S.FormNewsArea onSubmit={submit}>
        {name && (
          <Input
            name="name"
            label="Defina um nome para o seu usuário"
            handleChange={handleChange}
            placeholder="Defina um nome para o seu usuário..."
          />
        )}
        <Input
          name="email"
          label="Email"
          handleChange={handleChange}
          placeholder="Exemplo: pedro@gmail.com"
        />
        <Input
          type="password"
          name="password"
          label="Senha"
          handleChange={handleChange}
          placeholder="Sua senha..."
        />
        {confirmPassword && (
          <Input
            type="password"
            name="confirmpassword"
            label="Confirme sua senha"
            handleChange={handleChange}
            placeholder="Confirme sua senha..."
          />
        )}
        <SubmitButton loading={loading} btnText={btnText} />
      </S.FormNewsArea>

      {login && (
        <S.Redirect>
          Não possui uma conta? <NavLink to="/cadastrar">Cadastre-se</NavLink>.
        </S.Redirect>
      )}

      {register && (
        <S.Redirect>
          Já possui uma conta? <NavLink to="/entrar">É só entrar</NavLink>.
        </S.Redirect>
      )}
    </S.FormNewsContainer>
  );
};

export default FormNews;
