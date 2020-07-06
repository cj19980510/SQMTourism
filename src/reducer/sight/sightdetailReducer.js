import { SIGHTDETAIL } from '../../action/actionType'
const initState = {
    data: null
}
const sightdetailReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "SIGHTDETAIL")
        newState.data = action.payload

    return newState
}
export default sightdetailReducer