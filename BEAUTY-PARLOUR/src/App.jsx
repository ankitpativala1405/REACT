import './App.css'
import GiftCard from './components/card/GiftCard'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/header/navbar'
import SimpleSlider from './components/header/slider'
import Service from './components/main/service'
import Trending from './components/Trending/Trending'
import ServiceDetail from './components/ServiceDetail/ServiceDetail'

function IndexPage() {

  return (
    <>
    <Header/>
    <Navbar/>
    <ServiceDetail/>
    {/* <SimpleSlider/>
    <Service/>
    <Trending/>
    <GiftCard/> */}
    <Footer/>
    </>
  )
}

export default IndexPage
