// ==============|| font used || =================
// font-family: 'Noto Serif', serif;
// font-family: 'Yeseva One', cursive;

import './App.css';
import Header from './components/header/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Translator from './components/Translator/translator';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path= '/'  element={<Home />} />
          <Route path= '/home'  element={<Home />} />
          <Route path="/about" element={<Aboutus />}/>
          <Route path='/translator' element={<Translator />}/>
          <Route path='*' element={< ErrorPage />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
