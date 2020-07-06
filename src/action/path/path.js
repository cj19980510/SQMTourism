
// 获取朋友列表

import { PATH } from '../actionType'
import request from '../request'
export const path = () => {
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/path',
            method: 'GET',

        })
        // console.log('action', result.data.data)
        const action = {
            type: PATH,
            payload: result.data.data
        }
        dispatch(action)

    }

}


