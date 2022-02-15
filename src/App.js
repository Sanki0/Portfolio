import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './fonts.css'
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home ";
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between min-h-screen' id="">
        <Navbar />
        <div className='container mx-auto px-3 pb-4' >
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>

    </Router>
  );
}

export default App;
