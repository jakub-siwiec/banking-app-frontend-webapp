export default function apiErrorHandler(err, res) {
    return res.status(err.status_code).json(err)
}