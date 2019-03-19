import { SET_VISIBILITY_FILTER } from '../actions/actionTypes';
import { VisibilityFilters } from '../actions/visibilityFilter';

export default function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}