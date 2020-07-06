
// 获取朋友列表

import { COMMENTS } from '../actionType'
import request from '../request'
export const comAdd = async (params) => {
    const result = await request({
        url: 'http://localhost:3000/commentadd',
        method: 'POST',
        params
    })
}


