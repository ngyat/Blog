/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import {
  combineReducers
} from 'redux';
/* Populated by react-webpack-redux:reducer */
import todos from './todos';
import visibilityFilter from './visibilityFilter';


const reducers = {
  todos,
  visibilityFilter
};


// redux.combineReducers 方法将其他 reducer 结合起来，每个数据 key 都需要实现一个对应的 reducer
module.exports = combineReducers(reducers);