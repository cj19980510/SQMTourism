// 获取朋友列表

import { LOGIN } from '../actionType'
import request from '../request'
export const login = (params) => {


    // console.log("params", params)
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/user/login',
            method: 'POST',
            params: params
        })
        // console.log(result)
        const action = {
            type: LOGIN,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


