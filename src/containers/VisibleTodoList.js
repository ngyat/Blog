import { connect } from 'react-redux'
import { toggleTodo } from '../actions/const'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}



//定义该参数,组件将会监听 Redux store 的变化。
//任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
//该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

//定义的方法名将作为属性名，合并到组件的 props 中。
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

//mergeProps(stateProps, dispatchProps, ownProps): props] (Function)
//mapStateToProps() 与 mapDispatchToProps() 的执行结果和组件自身的 props 将传入到这个回调函数中
// const mergeProps=(stateProps, dispatchProps, ownProps)=>{
// ...
// }

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList