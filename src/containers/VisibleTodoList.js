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
// const ContainerComponent = connect(
//     /**
//      * 方法将 store 作为参数，返回有个 {key: Value} 对象，key 作为属性传递给 DummyComponent
//      * @type {[type]}
//      */
//     mapStateToProps: Function,
//     /**
//      * 方法传递 store.dispatch 作为参数，返回一个{key: Function} 对象，key 作为属性传递给 DummyComponent
//      * @type {[type]}
//      */
//     mapDispatchToProps: Function
// )(DummyComponent)



const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList