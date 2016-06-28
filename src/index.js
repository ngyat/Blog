import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';

const store = configureStore();


// Provider这个模块是作为整个App的容器，在你原有的App Container的基础上再包上一层
// ，它的工作很简单，就是接受Redux的store作为props，并将其声明为context的属性之一，子组
// 件可以在声明了contextTypes之后可以方便的通过this.context.store访问到store。不过我们
// 的组件通常不需要这么做，将store放在context里，是为了给下面的connect用的。

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
