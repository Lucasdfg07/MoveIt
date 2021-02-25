import Head from 'next/head';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png"/>
      </Head>

      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </div>
  )
}

export default MyApp
