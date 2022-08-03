import { Toaster } from 'react-hot-toast'
import Navbar from '../components/navbar'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-neutral text-white'>
      <Navbar />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Component {...pageProps} />

    </div>
  )
}

export default MyApp
