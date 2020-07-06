
// 获取朋友列表

import { MYCART } from '../actionType'
import request from '../request'
export const myCart = (id) => {
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/mycart',
            method: 'GET',
            params: { userid: id }
        })
        // console.log('action', JSON.parse(result.data.data))
        const action = {
            type: MYCART,
            payload: JSON.parse(result.data.data).data
        }
        dispatch(action)

    }

}


