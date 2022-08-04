import { Toaster } from 'react-hot-toast'
import Navbar from '../components/navbar'
import '../styles/globals.css'
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



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
