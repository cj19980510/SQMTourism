import request from '../request'
export const cart = async (params) => {

    const result = await request({
        url: 'http://localhost:3000/mycartadd',
        method: 'POST',
        params: {
            params: params
        }
    })
    console.log(params)

}