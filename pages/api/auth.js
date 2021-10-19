import withHttpOnlyCookie from '../../middleware/withHttpOnlyCookie'

import cookiesRequest from '../../libs/cookiesRequest'


const handler = async (req, res) => {
    console.log(res.locals)
    await cookiesRequest(
        req,
        res,
        'http://localhost:8002/auth'
    )
}


export default withHttpOnlyCookie(handler)