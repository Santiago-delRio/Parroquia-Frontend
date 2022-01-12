import Layout from "../components/Layout"
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="description" content="Información de la Parroquia Santa Juana de Arco"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp