import React from 'react';

export default class NewsDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsId: ''
    };
  }

  // life cycle methods
  // ****************************************
  componentDidMount() {
    this.setState({
      newsId: this.props.match.params.id
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      newsId: nextProps.match.params.id
    });
  }
  // ****************************************

  render() {
    return (
      <div className="App-news-detail">
        <span>我是NewsDetail组件</span>
        <div>
          我是新闻{this.state.newsId}的详情内容
        </div>
      </div>
    );
  }

}