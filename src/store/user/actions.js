import { USER_SET_DATA, USER_SET_IS_AUTH, USER_SET_ROLES } from '../actionTypes';
import api from '../../utils/api';

const Actions = {
  setUserData: data => ({
    type: USER_SET_DATA,
    payload: data,
  }),
  setRoles: data => ({
    type: USER_SET_ROLES,
    payload: data,
  }),

  getRoles: () => dispatch => {
    api.user
      .getRoles()
      .then(({ data: {data} }) => {
        dispatch(Actions.setRoles(data));
      })
      .catch(err => {
        //
      });
  },
};

export default Actions;