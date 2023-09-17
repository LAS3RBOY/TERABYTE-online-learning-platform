// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Html from './component/Html';
import Blog from './component/Blog';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './component/Footer';



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/html' element={<Html />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
        <Footer />
      </Router>


    </>
  );
}

export default App;