import React from 'react'
import About from '../Contents/About';
import FRC from '../Contents/FRC';
import Rings from '../Contents/Rings';
import Services from '../Contents/Services';
import Succeed from '../Contents/Succeed';
import WhyBitss from '../Contents/WhyBitss';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';

const English = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Rings/>
        <FRC/>
        <Succeed/>
        <Services/>
        <About/> 
        <WhyBitss/>
        <Footer/>
    </div>
  )
}

export default English