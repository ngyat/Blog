/* Populated by react-webpack-redux:action */
/**
 *action 类型
 */

let nextTodoId = 0;

//添加操作
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

//查询操作
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER ',
    filter
  }
}


//切换操作
export const toggleTodo=(id)=>{
  return{
    type: 'TOGGLE_TODO',
    id
  }
}
