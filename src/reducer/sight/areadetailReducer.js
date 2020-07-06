import { AREADETAIL } from '../../action/actionType'
const initState = {
    data: null
}
const areadetailReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "AREADETAIL")
        newState.data = action.payload

    return newState
}
export default areadetailReducer