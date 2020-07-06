import { PROID } from '../../action/actionType'
const initState = {
    data: null
}
const detailReducer = (state = initState, action) => {
    // console.log(action)
    const newState = {
        ...state
    }
    if (action.type == "PROID")
        newState.data = action.payload
    // console.log(newState)
    return newState
}
export default detailReducer