
// 获取朋友列表

import { PROID } from '../actionType'
import request from '../request'
export const proDetail = (id) => {
    console.log(id)
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/prodetails',
            method: 'GET',
            params: { proId: id }
        })
        // console.log('action', result)
        const action = {
            type: PROID,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


