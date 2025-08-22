import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import  Testimonials from './components/Testimonials';
import  Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;