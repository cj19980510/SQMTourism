import { MYCOLLECT } from '../../action/actionType'
const initState = {
    data: null
}
const mycollectReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "MYCOLLECT")
        newState.data = action.payload

    return newState
}
export default mycollectReducer