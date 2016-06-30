import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/const'

let AddTodo = ({ dispatch }) => {
  let input

  //分发 action。这是触发 state 变化的惟一途径。
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      } }>
        <input ref={node => {
          input = node
        } } />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo