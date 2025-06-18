import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/header/navbar'
import AllRoutes from './Routes/AllRoutes'



function AppIndex() {

  return (
    <>
    <Header/>
    <Navbar/>
    <AllRoutes/>
    {/* <IndexPage/> */}
    {/* <ServiceDetailMain/> */}
    {/* <BridalMain/> */}
    {/* <BookAppointmentMain/> */}
    <Footer/>
    </>
  )
}

export default AppIndex
