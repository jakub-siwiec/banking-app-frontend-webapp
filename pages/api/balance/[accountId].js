import cookiesRequest from '../../../libs/cookiesRequest'


export default async function handler(req, res) {
    const { accountId } = req.query

    await cookiesRequest(
        req,
        res,
        `http://localhost:8002/balance/${accountId}`
    )
}  