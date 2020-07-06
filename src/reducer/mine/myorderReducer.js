import { MYORDER } from '../../action/actionType'
const initState = {
    data: null
}
const myorderReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "MYORDER")
        newState.data = action.payload

    return newState
}
export default myorderReducer