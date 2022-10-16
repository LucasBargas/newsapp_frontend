import React, { useState } from 'react';
import Input from '../Input';
import SubmitButton from '../SubmitButton';
import Textarea from '../Textarea';
import * as S from './styles';

const FormNews = ({
  newsData,
  handleSubmit,
  title,
  subtitle,
  btnText,
  loading,
}) => {
  const [news, setNews] = useState(newsData || {});

  const handleChange = (e) => {
    setNews({ ...news, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await handleSubmit(news);
  };

  return (
    <S.FormNewsContainer>
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}

      <S.FormNewsArea onSubmit={submit}>
        <Input
          name="title"
          label="Título para notícia"
          value={news.title || ''}
          handleChange={handleChange}
          placeholder="Defina um título para a notícia..."
        />
        <Textarea
          name="body"
          label="Texto para notícia"
          value={news.body || ''}
          handleChange={handleChange}
          placeholder="Defina um texto para a notícia..."
        />
        <Input
          name="category"
          label="Categoria para notícia"
          value={news.category || ''}
          handleChange={handleChange}
          placeholder="Defina uma categoria, por exemplo: Esporte..."
        />
        <Input
          name="author"
          label="Autor da notícia"
          value={news.author || ''}
          handleChange={handleChange}
          placeholder="Defina um autor para a notícia..."
        />
        <SubmitButton loading={loading} btnText={btnText} />
      </S.FormNewsArea>
    </S.FormNewsContainer>
  );
};

export default FormNews;
