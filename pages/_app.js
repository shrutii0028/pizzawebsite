import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import store from "../redux/store";
import{Provider} from "react-redux";

function App({ Component, pageProps }) {
  return (
    <Provider store = {store}>
      <Navbar />
        <Component {...pageProps} />
      <Footer />
      </Provider>
  );
}

export default App;
