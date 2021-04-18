import {TEACHER_SET_CLASS, TEACHER_SET_CLASS_ITEM} from '../actionTypes';
import api from '../../utils/api';

const Actions = {
  setClass: data => ({
    type: TEACHER_SET_CLASS,
    payload: data,
  }),

  setClassItem: data => ({
    type: TEACHER_SET_CLASS_ITEM,
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

  getClassItem: (id) => dispatch => {
    api.teacher
        .getClassItem(id)
        .then(({ data: {data} }) => {
          dispatch(Actions.setClassItem(data));
        })
        .catch(err => {
          //
        });
  }
};

export default Actions;