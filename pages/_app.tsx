import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import '../styles/globals.css'
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
}, []);
  return <Component {...pageProps} />
}

export default MyApp
