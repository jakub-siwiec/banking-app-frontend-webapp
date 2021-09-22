import cookiesRequest from '../../libs/cookiesRequest'

export default async function handler(req, res) {
    console.log("hi2")
    await cookiesRequest(
        req,
        res,
        'http://localhost:8002/auth'
    )
}  