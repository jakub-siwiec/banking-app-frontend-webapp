import withHttpOnlyCookie from '../../middleware/withHttpOnlyCookie'

import backendRequest from '../../libs/requests/backendRequest'


const handler = async (req, res) => {
    await backendRequest(
        req,
        res,
        'http://localhost:8002/auth'
    )
}


export default withHttpOnlyCookie(handler)