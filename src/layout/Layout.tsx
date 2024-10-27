import { Outlet } from 'react-router-dom'
import Navbar from '../componentsPersonal/navbar/Navbar'
import Hero from '../componentsPersonal/hero/Hero'
import Footer from '../componentsPersonal/footer/Footer'

const Layout = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout