import React from 'react';
import PropTypes from 'prop-types';

export default class Todo extends React.Component {
  render() {
    return (
      <li 
        className="App-todolist-item"
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-throught' : 'none'
        }}>
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
