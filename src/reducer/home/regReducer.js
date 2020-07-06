import { REG } from '../../action/actionType'
const initState = {
    data: null
}
const regReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "REG")
        newState.data = action.payload

    return newState
}
export default regReducer