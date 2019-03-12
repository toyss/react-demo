import React from 'react';
import PropTypes from 'prop-types';

export default class Hook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
    console.log('创建第一步：constructor');
  }

  // life cycle methods
  // ****************************************
  componentWillMount() {
    console.log('创建第二步：componentWillMount');
  }

  componentDidMount() {
    console.log('创建第四步：componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
    console.log('获取到props：componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('更新第一步：shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('更新第二步：componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('更新第四步：componentDidMount');
  }

  componentWillUnmount() {
    console.log('组件销毁：componentWillUnmount');
  }
  // ****************************************

  render() {
    console.log('更新或创建第三步：render');
    return (
      <div className="App-hook">
        <h1>{this.state.title}</h1>
        <button onClick={this.handleBtnClick}>Hook 更新state</button>
      </div>
    )
  }

  // event methods
  // ****************************************
  handleBtnClick = () => {
    this.setState({
      title: '僵尸王的大腿被我吃了'
    });
  }
  // ****************************************

}

Hook.propTypes = {
  title: PropTypes.string
}
