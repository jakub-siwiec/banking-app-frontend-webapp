import cookiesRequest from '../../../libs/cookiesRequest'


export default async function handler(req, res) {
    const { accountId } = req.query

    await cookiesRequest(
        req,
        res,
        `http://localhost:8002/transactions/${accountId}?startDate=2018-11-09&endDate=2021-09-07`
    )
}  