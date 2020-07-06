
// 获取朋友列表

import { SIGHTAREA } from '../actionType'
import request from '../request'
export const sightArea = () => {
    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/areas',
            method: 'GET',
        })
        // console.log("area", result.data.data)
        const action = {
            type: SIGHTAREA,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


