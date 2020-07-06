
// 获取朋友列表


import request from '../request'
export const noteAdd = async (params) => {
    const result = await request({
        url: 'http://localhost:3000/noteadd',
        method: 'POST',
        params
    })
}


