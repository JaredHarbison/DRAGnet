export default function queens_reducer(state = {
    loading: false,
    drag_queens: []
}, action) {
    console.log(action)
    switch (action.type) {

      case 'LOADING_QUEENS':
      return Object.assign({}, state, { loading: true })

      case 'FETCH_QUEENS':
      return { loading: false, drag_queens: action.payload }

      default:
      return state
    }
}
