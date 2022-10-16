const authUser = async (setAuthenticated, data, navigate) => {
  setAuthenticated(true);
  localStorage.setItem('apiToken', JSON.stringify(data));
  navigate('/');
};

export default authUser;
