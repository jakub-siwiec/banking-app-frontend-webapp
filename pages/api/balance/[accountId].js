import withHttpOnlyCookie from '../../../middleware/withHttpOnlyCookie'

import cookiesRequest from '../../../libs/cookiesRequest'


const handler = async (req, res) => {
    const { accountId } = req.query

    await cookiesRequest(
        req,
        res,
        `http://localhost:8002/balance/${accountId}`
    )
}  

export default withHttpOnlyCookie(handler)