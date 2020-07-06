
// 获取朋友列表

import { AREADETAIL } from '../actionType'
import request from '../request'
export const areaDetail = (areaId) => {
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/areasights',
            method: 'GET',
            params: { areaId: areaId }
        })
        // console.log("areadetail", result.data.data)
        const action = {
            type: AREADETAIL,
            payload: JSON.parse(result.data.data).data
        }
        dispatch(action)

    }

}


