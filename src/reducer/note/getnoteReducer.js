import { NOTES } from '../../action/actionType'
const initState = {
    data: null
}
const getnoteReducer = (state = initState, action) => {
    // console.log(action)
    const newState = {
        ...state
    }
    if (action.type == "NOTES")
        newState.data = action.payload
    // console.log(newState)
    return newState
}
export default getnoteReducer