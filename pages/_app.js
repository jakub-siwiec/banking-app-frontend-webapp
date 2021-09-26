import '../styles/globals.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { useEffect } from 'react'

import { withRouter } from 'next/router'

import swrRequest from '../libs/swrRequest'

import LoaderSite from '../components/loader/LoaderSite'

function MyApp({ Component, pageProps, router }) {

  const { data, error, loading } = swrRequest('/api/auth')

  useEffect(() => {
    if (router.isReady && router.pathname !== '/') {
      if (error) router.push('/')
      if (data) console.log(data)
    }
  }, [data, error])

  if (loading) return <LoaderSite />

  return (
    <Component {...pageProps} />
  )
}

export default withRouter(MyApp)
