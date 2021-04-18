import axios from '../axios';

export default {
    getRoles: () => axios.get('role'),
};