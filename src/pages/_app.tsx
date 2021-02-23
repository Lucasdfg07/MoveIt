import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png"/>
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
