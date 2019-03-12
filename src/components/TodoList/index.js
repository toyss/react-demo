import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) =>
            <Todo 
              key={index}
              onClick={() => this.handleTodoClick(index)}
              {...todo} />
          )
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  handleTodoClick: PropTypes.func.isRequired
};
