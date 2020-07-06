import { LOGIN } from '../../action/actionType'
const initState = {
    data: null
}
const loginReducer = (state = initState, action) => {
    // console.log("action,", action)
    const newState = {
        ...state
    }
    if (action.type == "LOGIN")
        newState.data = action.payload

    return newState
}
export default loginReducer