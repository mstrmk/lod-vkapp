import { TEACHER_SET_CLASS } from '../actionTypes';
import api from '../../utils/api';

const Actions = {
  setClass: data => ({
    type: TEACHER_SET_CLASS,
    payload: data,
  }),

  getClass: () => dispatch => {
    api.teacher
      .getClass()
      .then(({ data: {data} }) => {
        dispatch(Actions.setClass(data));
      })
      .catch(err => {
        //
      });
  },
};

export default Actions;