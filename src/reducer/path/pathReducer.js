import { PATH } from '../../action/actionType'
const initState = {
    data: null
}
const pathReducer = (state = initState, action) => {
    // console.log(action)
    const newState = {
        ...state
    }
    if (action.type == PATH)
        newState.data = action.payload
    // console.log(newState)
    return newState
}
export default pathReducer