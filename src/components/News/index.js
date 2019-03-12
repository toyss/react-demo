import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NewsDetail from '../NewsDetail';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, title: '我是新闻1'},
        {id: 2, title: '我是新闻2'},
        {id: 3, title: '我是新闻3'},
        {id: 4, title: '我是新闻4'},
        {id: 5, title: '我是新闻5'},
      ]
    };
  }

  render() {
    return (
      <Router>
        <div className="App-news">
          <span>我是News组件</span>
          <ul>
            {
              this.state.list.map((item, index) => 
                <li key={index}>
                  <Link to={`/news/newsDetail/${item.id}`}>{item.title}</Link>
                </li>
              )
            }
          </ul>
          <hr/>
          <Route path="/news/newsDetail/:id" component={NewsDetail} />
        </div>
      </Router>
    );
  }
}
