export default function generateErrorObject (message, statusCode) {
    return {
        name: '',
        message: message,
        code: '',
        type: '',
        status_code: statusCode
    }
}