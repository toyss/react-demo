import React from 'react';
import '../../assets/css/App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Hook from './components/Hook';
import Home from '../../components/Home';
import News from '../../components/News';
import HomePic from '../../components/HomePic';

const getConfirmation = (message, callback) => {
  console.log(message);
  console.log(callback);
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '僵尸王'
    };
  }

  render() {
    return (
      <Router getUserConfirmation={getConfirmation}>
        <div>
          <Link to="/">首页</Link>
          <br/>
          <Link to="/news">新闻</Link>
          <hr/>
          <Route exact path="/" component={Home} />
          <Route path="/homePic" component={HomePic} />
          <Route path="/news" component={News} />
        </div>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <Hook title={this.state.title} />
      //     <button onMouseUp={this.handleBtnClick}>更新App state</button>
      //   </header>
      // </div>
    );
  }

  // event methods
  // ****************************************
  handleBtnClick = () => {
    this.setState({
      title: '变异的僵尸王'
    });
  }
  // ****************************************
  
}

export default App;
