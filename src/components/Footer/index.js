import React from 'react';

import { VisibilityFilters } from '../../redux/actions/visibilityFilter';
import FilterLink from '../../containers/FilterLink'

export default class Footer extends React.Component {
  render() {
    return (
      <p className="App-footer">
        Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
      </p>
    );
  }
}
