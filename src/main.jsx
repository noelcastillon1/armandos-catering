import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FoodMenu from './components/FoodMenu'
import ConsultForm from './components/ConsultForm'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <FoodMenu />
    <ConsultForm />
    <Services />
    <Reviews />
    <Footer />
  </React.StrictMode>,
)
