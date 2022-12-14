import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Technologies from './components/Technologies/Technologies';
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Technologies />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App