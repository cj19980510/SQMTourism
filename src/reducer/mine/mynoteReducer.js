import { MYNOTES } from '../../action/actionType'
const initState = {
    data: null
}
const mynoteReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "MYNOTES")
        newState.data = action.payload

    return newState
}
export default mynoteReducer