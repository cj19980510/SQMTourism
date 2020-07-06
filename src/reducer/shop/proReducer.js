import { PRODUCTS } from '../../action/actionType'
const initState = {
    data: null
}
const proReducer = (state = initState, action) => {
    // console.log(action)
    const newState = {
        ...state
    }
    if (action.type == "PRODUCTS")
        newState.data = action.payload
    // console.log(newState)
    return newState
}
export default proReducer