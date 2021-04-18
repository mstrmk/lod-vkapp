import { combineReducers } from 'redux';

const reducers = ['user', 'teacher'];

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}/reducer`).default;
    return initial;
  }, {})
);