import { MYCART } from '../../action/actionType'
const initState = {
    data: null
}
const mycartReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "MYCART")
        newState.data = action.payload

    return newState
}
export default mycartReducer