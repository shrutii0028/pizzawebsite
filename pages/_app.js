import Featured from '../components/Featured';
import Layout from '../components/Layout'
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
    {/* <Featured/> */}
   </Layout>  
  )
  
}

export default App;
