// Configurar el interceptor de solicitudes de Axios
axios.defaults.baseURL = 'http://localhost:1337/api';
axios.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    if (token?.jwt) {
      config.headers['Authorization'] = `Bearer ${token?.jwt}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      console.error('No autorizado. Redirigiendo al login...');
      localStorage.removeItem('token');
      window.location.href = 'index.html';
    }
    return Promise.reject(error);
  }
);
