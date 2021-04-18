import axios from '../axios';

export default {
    getClass: () => axios.get('teacher/class'),
};