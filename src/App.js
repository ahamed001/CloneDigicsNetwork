import './App.css';
import FRC from './Contents/FRC';
import Services from './Contents/Services';
import Succeed from './Contents/Succeed';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <FRC/>
      <Succeed/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;