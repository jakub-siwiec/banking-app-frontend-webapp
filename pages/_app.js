import '../styles/globals.scss'

import { withRouter } from 'next/router'

import swrRequest from '../libs/swrRequest'

import LoaderSite from '../components/LoaderSite'

function MyApp({ Component, pageProps, router }) {

  if (router.pathname !== '/') {
    const { data, error, loading } = swrRequest('/api/auth')
    if (loading) return <LoaderSite />
  }

  return (
    <Component {...pageProps} />
  )
}

export default withRouter(MyApp)
