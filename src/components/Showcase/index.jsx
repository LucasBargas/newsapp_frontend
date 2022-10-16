import React from 'react';
import * as S from './styles';
import NewsCard from '../NewsCard';
import AppContainer from '../AppContainer';

const Showcase = ({ datas, accessBtn }) => {
  return (
    <AppContainer>
      <S.ShowcaseArea>
        {datas &&
          datas.map((data) => (
            <NewsCard
              key={data._id}
              title={data.title}
              body={data.body}
              category={data.category}
              author={data.author}
              id={data._id}
              accessBtn={accessBtn}
            />
          ))}
      </S.ShowcaseArea>
    </AppContainer>
  );
};

export default Showcase;
