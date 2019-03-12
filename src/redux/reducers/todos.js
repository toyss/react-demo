import { ADD_TODO, TOGGLE_TODO } from '../actions/actionTypes';

export default function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      state.map((todo, index) => {
        if (index === action.index) todo.completed = !todo.completed;
        return todo;
      })
      return state;
    default:
      return state;
  }
}