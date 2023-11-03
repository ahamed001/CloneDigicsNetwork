import './App.css';
import FRC from './Contents/FRC';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <FRC/>
      <Footer/>
    </div>
  );
}

export default App;