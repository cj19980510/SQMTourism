
// 获取朋友列表


import request from '../request'
export const orderAdd = async (params) => {

    const result = await request({
        url: 'http://localhost:3000/orderadd',
        method: 'POST',
        params: params
    })


}


