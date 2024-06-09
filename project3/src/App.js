import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'; // Dodano za ThemeProvider
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Chefs from './components/Chefs';
import Footer from './components/Footer';
import './App.css';
import Gallery from './components/Gallery';
import theme from './components/theme'; 

function App() {
  return (
    <ThemeProvider theme={theme}> {}
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chefs" element={<Chefs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
