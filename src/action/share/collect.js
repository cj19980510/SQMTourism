
// 获取朋友列表
import request from '../request'
export const collect = async (params) => {
    console.log(params)
    const result = await request({
        url: 'http://localhost:3000/notecollect',
        method: 'POST',
        params: params
    })
}


