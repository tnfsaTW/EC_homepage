import '../styles/index.css'

import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>台南一中選舉委員會</title>
      </Head>

      <Component {...pageProps} />

      {/*<div id="wrapper" class="fade-in">
        <Component {...pageProps} />
      </div>
      <br />
  <Footer />*/}
    </React.Fragment>
  )
}

export default MyApp
