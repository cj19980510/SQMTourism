
// 获取朋友列表

import { MINEORDER } from '../actionType'
import request from '../request'
export const myOrder = (userId) => {
    // console.log("userId")
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/mineorder',
            method: 'GET',
            params: { userId: userId }
        })
        console.log('action', JSON.parse(result.data.data))
        const action = {
            type: MINEORDER,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


