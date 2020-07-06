import request from '../request'
export const delmyComment = async (params) => {
    const result = await request({
        url: 'http://localhost:3000/delmycomment',
        method: 'POST',
        params: params
    })


}
