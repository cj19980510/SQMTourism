import { MYCOMMENT } from '../../action/actionType'
const initState = {
    data: null
}
const mycommentReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == "MYCOMMENT")
        newState.data = action.payload

    return newState
}
export default mycommentReducer