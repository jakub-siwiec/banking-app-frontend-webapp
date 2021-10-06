import cookiesRequest from '../../libs/cookiesRequest'


export default async function handler(req, res) {
    await cookiesRequest(
        req,
        res,
        'http://localhost:8002/auth'
    )
}  