
import axios from 'axios';

axios.defaults.baseURL = "http://vk.kwel.ru/api/";
axios.defaults.headers.common['authorization-params'] = `${window.location.search.split('?')[1]}`;

window.axios = axios;

export default axios; 