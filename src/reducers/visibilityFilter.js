const visibilityFilter = (state = 'SHOW_ALL', action) => {
  debugger;
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }

}
export default visibilityFilter