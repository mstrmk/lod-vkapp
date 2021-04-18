import axios from '../axios';

export default {
    getClass: () => axios.get('teacher/class'),
    getClassItem: (id) => axios.get(`teacher/class/${id}`)
};