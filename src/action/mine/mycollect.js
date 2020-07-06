
// 获取朋友列表

import { MYCOLLECT } from '../actionType'
import request from '../request'
export const myCollect = (userId) => {
    console.log("userId")
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/mycollect',
            method: 'GET',
            params: { userId: userId }
        })
        // console.log('action', JSON.parse(result.data.data))
        const action = {
            type: MYCOLLECT,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


