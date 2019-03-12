import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, title: '我是主页照片1'},
        {id: 2, title: '我是主页照片2'},
        {id: 3, title: '我是主页照片3'},
        {id: 4, title: '我是主页照片4'},
        {id: 5, title: '我是主页照片5'},
      ]
    };
  }

  render() {
    return (
      <div className="App-home">
        <span>我是Home组件</span>
        <ul>
          {
            this.state.list.map((item, index) => 
              <li key={index}>
                <Link to={`/homePic?id=${item.id}`}>{item.title}</Link>
              </li>
            )
          }
        </ul>
      </div>
    );
  }

}
