// 获取朋友列表

import { REG } from '../actionType'
import request from '../request'
export const reg = (params) => {


    // console.log(params);
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/user/reg',
            method: 'POST',
            params: params
        })
        // console.log(result)
        const action = {
            type: REG,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


