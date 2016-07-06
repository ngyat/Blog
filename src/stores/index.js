const redux = require('redux');
const reducers = require('../reducers');
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk'


//applyMiddleware(添加中间件)
module.exports = function (initialState) {
  debugger;
  const store = redux.createStore(
    reducers,
    initialState,
    redux.applyMiddleware(thunkMiddleware,createLogger()))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
