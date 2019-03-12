import React from 'react';

export default class HomePic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picId: ''
    };
  }

  // life cycle methods
  // ****************************************
  componentDidMount() {
    console.log(this.props);
    // this.setState({
    //   picId: this.props.match.params.id
    // });
  }
  // ****************************************

  render() {
    return (
      <div className="App-home-pic">
        <span>我是HomePic组件</span>
        <div>
          我是照片{this.state.picId}的详情内容
        </div>
      </div>
    );
  }
}