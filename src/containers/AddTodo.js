import React from 'react';
import { connect } from 'react-redux';

import todosAction from '../redux/actions/todos';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null
    }
  }

  render() {
    let { input } = this;
    return (
      <div className="App-addtodo">
        <input ref={this.getInputNode} />
        <button onClick={this.handleBtnClick}>Add Todo</button>
      </div>
    );
  }

  // function methods
  // ****************************************
  getInputNode = (node) => {
    this.setState({
      input: node
    });
  }
  // ****************************************

  // event methods
  // ****************************************
  handleBtnClick = (e) => {
    let { input } = this.state;
    const { dispatch } = this.props;
    e.preventDefault();
    if (!input || !input.value.trim()) return;
    dispatch(todosAction.add(input.value));
    input.value = '';
  }
  // ****************************************
}

export default connect()(AddTodo);
