import * as React from "react";
import * as ReactDOM from "react-dom";



class HelloWorld extends React.Component<any, any> {
    render() {
        return <div>Hello, World!</div>;
    }
}
ReactDOM.render(<HelloWorld/>, document.getElementById("content"));







// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './stores';
// import App from './containers/App';

// const store = configureStore();

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('app')
// );
