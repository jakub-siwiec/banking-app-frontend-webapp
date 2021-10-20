import withHttpOnlyCookie from '../../middleware/withHttpOnlyCookie'

import backendRequest from '../../libs/backendRequest'


const handler = async (req, res) => {
    await backendRequest(
        req,
        res,
        'http://localhost:8002/accounts'
    )
}    


export default withHttpOnlyCookie(handler)