import request from '../request'
export const delMynote = async (params) => {
    const result = await request({
        url: 'http://localhost:3000/delmynote',
        method: 'POST',
        params: params
    })


}
