
import { COMMENTS } from '../../action/actionType'
const initState = {
    data: null
}
const getcommReducer = (state = initState, action) => {
    // console.log(action)
    const newState = {
        ...state
    }
    if (action.type == "COMMENTS")
        newState.data = action.payload
    // console.log(newState)
    return newState
}
export default getcommReducer