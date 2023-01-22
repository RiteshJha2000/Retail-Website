import React, { useState } from "react";

import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Intro from './Component/Intro';
import Navbar from './Component/Navbar';
import Products from './Component/Products';

const App = () => {

  const [loading, setloading] = useState(true)
  const spinner = document.getElementById('spinner')
  if(spinner){
    setTimeout(()=>{
      spinner.style.display="none";
      setloading(false)
    },2000);
  }

  return (
    !loading && (
      <div className="App">
      <Navbar/>
      <Intro/>
      <Products/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
    )
  );
}

export default App;
