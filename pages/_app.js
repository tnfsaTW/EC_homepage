import '../styles/globals.css'

import React from 'react'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
        <Head>
            <title key={"title"}>台南一中選舉委員會</title>
        </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
