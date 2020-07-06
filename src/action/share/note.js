
// 获取朋友列表

import { NOTES } from '../actionType'
import request from '../request'
export const getNote = (userId) => {
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/notes',
            method: 'GET',
            params: { "userId": userId }
        })
        // console.log('action', result.data.data)
        const action = {
            type: NOTES,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


