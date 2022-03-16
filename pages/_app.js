import Layout from '../components/Layout'
import '../styles/globals.css'

const PshopApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default PshopApp
