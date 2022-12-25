import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Layout from '../components/Layout'
import Navbar from '../components/Navbar';
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
  // <Layout >
    <>
        <Navbar/>
        
    <Component {...pageProps} /> 
        <Footer/>
    </>
  )
  
}

export default App;
