import React from 'react';
import '../src/App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from '../src/components/Footer/Footer';
import Home from '../src/components/Home/Home';
import Info from "./components/Info/Info";
import Images from '../src/components/Images/Images';
import Gallery from "./components/Carousel/Gallery";


function App(){
  return<div className='App'>

      <Navbar />
      <Home />
      <Info />
      <Images />
      <Gallery />
      <Footer />

  </div>;
}
export default App;
