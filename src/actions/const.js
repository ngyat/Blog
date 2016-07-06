/* Populated by react-webpack-redux:action */
/**
 *action 类型
 */

let nextTodoId = 0;

//添加操作
export const addTodo = (text) => {  debugger;

  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

//查询操作
export const setVisibilityFilter = (filter) => {  debugger;

  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}


 //删除操作
export const toggleTodo = (id) => {  debugger;

  return {
    type: 'TOGGLE_TODO',
    id
  }
}
