import layoutstyles from '../../styles/Layout.module.css'
import Head from 'next/head'
import Footer from './footer'
import Navbar from './nav'

const Layout = ({children}) => {
  return (
    <>
      {/* <Head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2110687080692693"
     crossorigin="anonymous"></script>
      </Head> */}
      <Navbar />
      <main className={layoutstyles.container}>  
        {children} 
      </main>
      <Footer/>
    </>
  )
}

export default Layout