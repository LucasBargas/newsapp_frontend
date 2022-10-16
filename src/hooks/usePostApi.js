import { useState } from 'react';
import api from '../utils/api';
import useFlashMessages from '../hooks/useFlashMessages';
import { useNavigate } from 'react-router-dom';

const usePostApi = (url, navigatePath = false) => {
  const [postLoading, setPostLoading] = useState(false);
  const { setFlashMessage } = useFlashMessages();
  const navigate = useNavigate();

  const handlePost = (datas) => {
    const postDatas = async () => {
      let msgType = 'success';
      setPostLoading(true);
      const data = await api
        .post(url, datas, {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('apiToken') || '',
            )}`,
          },
        })
        .then((response) => {
          setPostLoading(false);
          if (navigatePath) navigate(navigatePath);
          return response.data;
        })
        .catch((err) => {
          msgType = 'error';
          setPostLoading(false);
          return err.response.data;
        });

      setFlashMessage(data.message, msgType);
      setPostLoading(false);
    };

    postDatas();
  };

  return {
    handlePost,
    postLoading,
  };
};

export default usePostApi;
