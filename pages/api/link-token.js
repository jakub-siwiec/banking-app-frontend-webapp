import backendRequest from '../../libs/requests/backendRequest'


export default async function handler(req, res) {
    await backendRequest(
        req, 
        res, 
        'http://localhost:8002'
    )
}
