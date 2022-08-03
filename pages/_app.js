import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-neutral text-white'>
      <Navbar />
      <Component {...pageProps} />

    </div>
  )
}

export default MyApp
