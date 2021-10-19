import { parseCookies } from 'nookies'


const withHttpOnlyCookie = (handler) => {
    return async (req,res) => {
        const cookies = parseCookies({req})

        if (!cookies.accesstoken) return false
    
        res.locals.bearerToken = 'Bearer ' + cookies.accesstoken

        return handler(req,res)
    }
}


export default withHttpOnlyCookie
