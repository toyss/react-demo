import { ADD_TODO, TOGGLE_TODO } from './actionTypes';

function add(text) {
  return {
    type: ADD_TODO,
    text
  };
}

function toggle(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}

export default { add, toggle }
