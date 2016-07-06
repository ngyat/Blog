const todo = (state, action) => {
  debugger;
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
}



const todos = (state = [], action) => {
  debugger;
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      let temp = state.map(t => todo(t, action));
      return temp;
    default:
      return state;
  }
}


export default todos;