import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFlashMessages from '../hooks/useFlashMessages';
import api from '../utils/api';

const usePatchApi = (url, navigatePath = false) => {
  const { setFlashMessage } = useFlashMessages();
  const [patchLoading, setPatchLoading] = useState(false);
  const navigate = useNavigate();

  const handlePost = (datas) => {
    const patchDatas = async () => {
      let msgType = 'success';
      setPatchLoading(true);
      const data = await api
        .patch(url, datas, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('apiToken') || '',
            )}`,
          },
        })
        .then((response) => {
          setPatchLoading(false);
          if (navigatePath) navigate(navigatePath);
          return response.data;
        })
        .catch((err) => {
          msgType = 'error';
          setPatchLoading(false);
          return err.response.data;
        });

      setFlashMessage(data.message, msgType);
      setPatchLoading(false);
    };

    patchDatas();
  };

  return {
    handlePost,
    patchLoading,
  };
};

export default usePatchApi;
