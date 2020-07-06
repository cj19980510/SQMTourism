
// 获取朋友列表

import { MYCOMMENT } from '../actionType'
import request from '../request'
export const myComment = (userId) => {
    // console.log(userId)
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/mycomment',
            method: 'GET',
            params: { userId: userId }
        })

        const action = {
            type: MYCOMMENT,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


