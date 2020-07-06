// 获取朋友列表

import { PRODUCTS } from '../actionType'
import request from '../request'
export const getPro = () => {

    return async dispatch => {
        const result = await request({
            url: 'http://localhost:3000/product',
            method: 'GET',

        })
        // console.log('action', result)
        const action = {
            type: PRODUCTS,
            payload: JSON.parse(result.data.data)
        }
        dispatch(action)

    }

}


