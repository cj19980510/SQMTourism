
// 获取朋友列表

import { SIGHTDETAIL } from '../actionType'
import request from '../request'
export const sightDetail = (sightId) => {
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/sightq',
            method: 'GET',
            params: {
                sightId: sightId
            }
        })
        // console.log("area", result.data.data)
        const action = {
            type: SIGHTDETAIL,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)
    }

}


