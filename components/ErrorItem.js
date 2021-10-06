import { useRouter } from 'next/router'

import { useSWRConfig } from 'swr'

import Loader from './loader/Loader'


const ErrorItem = ({ errorStatus, errorText, address=null }) => {
    const router = useRouter()
    const { mutate } = useSWRConfig()

    errorText === 'NO_ACCESS_TOKEN' && router.reload()
    errorText === 'INVALID_ACCESS_TOKEN' && router.reload()

    if (errorText === 'PRODUCT_NOT_READY') { 
        mutate(address)
        return <Loader />
    }

    return (
        <div>
            {errorStatus} {errorText}
        </div>
    )
}


export default ErrorItem
