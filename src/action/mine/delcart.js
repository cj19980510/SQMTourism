
// 获取朋友列表

// import { DELMYCART } from '../actionType'
import request from '../request'
export const delCart = async (id) => {


    const result = await request({
        url: 'http://localhost:3000/delmycart',
        method: 'POST',
        params: { cartid: id }
    })


}


