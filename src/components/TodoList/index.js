import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo';

export default class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
  };

  render() {
    const {todos, onTodoClick} = this.props;
    return (
      <ul className="App-todolist">
        {
          todos.map((todo, index) => <Todo {...todo} onClick={() => onTodoClick(index)} key={index} />)
        }
      </ul>
    );
  }
}
