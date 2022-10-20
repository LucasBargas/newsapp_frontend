import React, { useState } from 'react';
import useReqApi from '../../hooks/useReqApi';
import Showcase from '../../components/Showcase';
import Loading from '../../components/Loading';
import NoNews from '../../components/NoNews';
import Head from '../../components/Head';

const Homepage = () => {
  const { datas, loading } = useReqApi('/news');
  const [pageTitle] = useState('NewsLBS - Home');

  if (loading) return <Loading title={pageTitle} />;

  if (!datas || datas.length === 0)
    return (
      <>
        <Head title={pageTitle} />
        <NoNews />;
      </>
    );

  return (
    datas && (
      <>
        <Head title={pageTitle} />
        <section>
          <Showcase datas={datas} accessBtn />
        </section>
      </>
    )
  );
};

export default Homepage;
