import { SIGHTAREA } from '../../action/actionType'
const initState = {
    data: null
}
const sightareaReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "SIGHTAREA")
        newState.data = action.payload

    return newState
}
export default sightareaReducer