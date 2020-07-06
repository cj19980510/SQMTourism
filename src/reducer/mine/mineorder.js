import { MINEORDER } from '../../action/actionType'
const initState = {
    data: null
}
const mineorderReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == MINEORDER)
        newState.data = action.payload

    return newState
}
export default mineorderReducer