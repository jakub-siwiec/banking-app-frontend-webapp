import withHttpOnlyCookie from '../../middleware/withHttpOnlyCookie'

import cookiesRequest from '../../libs/cookiesRequest'


const handler = async (req, res) => {
    await cookiesRequest(
        req,
        res,
        'http://localhost:8002/access-token',
        'DELETE',
        true
    )
}    


export default withHttpOnlyCookie(handler)