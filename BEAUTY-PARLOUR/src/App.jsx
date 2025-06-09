import './App.css'
import BookAppointmentMain from './components/BookAppointment/BookAppointmentMain'
import BridalMain from './components/BridalDetail/BridalMain'
import GiftCard from './components/card/GiftCard'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/header/navbar'
import SimpleSlider from './components/header/slider'
import Service from './components/main/service'
import ServiceDetailMain from './components/ServiceDetail/ServiceDetailMain'
import Trending from './components/Trending/Trending'


function IndexPage() {

  return (
    <>
    <Header/>
    <Navbar/>
    {/* <ServiceDetailMain/> */}
    {/* <SimpleSlider/>
    <Service/>
    <Trending/>
    <GiftCard/> */}
    <BridalMain/>
    {/* <BookAppointmentMain/> */}
    <Footer/>
    </>
  )
}

export default IndexPage
