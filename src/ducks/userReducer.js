// Initial state, what is going to be tracked
const initialState = {
  user: '',
  isLoggedIn: false,
}

//Action constant - we need to name our actions
const LOGIN_USER = 'LOGIN_USER'

//Action - how we interact with the redux state
export function loginUser(name) {
  return {
    type: LOGIN_USER,
    payload: name,
  }
}

//Reducer - default export and the boss of everything
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload, isLoggedIn: true }
    default:
      return state
  }
}
