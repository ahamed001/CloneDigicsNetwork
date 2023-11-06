// import './App.css';
// import About from './Contents/About';
// import FRC from './Contents/FRC';
// import Rings from './Contents/Rings';
// import Services from './Contents/Services';
// import Succeed from './Contents/Succeed';
// import WhyBitss from './Contents/WhyBitss';
// import Footer from './Footer/Footer';
// import Home from './Home/Home';
// import Navbar from './Navbar/Navbar';

import Footer from "./Footer/Footer";
import WhyBitss from './Contents/WhyBitss';
import About from './Contents/About';
import Services from './Contents/Services';
import Succeed from './Contents/Succeed';
import FRC from './Contents/FRC';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Home/>
      <Rings/>*/}
      <FRC/>
      <Succeed/>
      <Services/>
      <About/> 
      <WhyBitss/>
      <Footer/> 
    </div>
  );
}

export default App;