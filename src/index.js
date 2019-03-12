import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './page/App';
import store from './redux/store';
import { todos, visibilityFilter } from './redux/actions';

console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(todos.add('今天要学完redux'));
store.dispatch(todos.add('今天要学习redux的示例代码'));
store.dispatch(todos.toggle(0));

unsubscribe();
store.dispatch(visibilityFilter.set('123'));

console.log(store.getState())


ReactDOM.render(<App />, document.getElementById('root'));
