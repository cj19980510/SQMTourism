
// 获取朋友列表

import { MYNOTES } from '../actionType'
import request from '../request'
export const myNotes = (userId) => {
    console.log(userId)
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/mynote',
            method: 'GET',
            params: { userId: userId }
        })
        // console.log('action', result.data.data)
        const action = {
            type: MYNOTES,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


