import React from 'react';
import Nav from './assets/components/Nav'
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Topics from './assets/components/Topics';
import Contact from './assets/components/Contact';
import './App.css';
import Header from './assets/components/header';

function App() {
  return (
    <div>
      <Header/>
      <Nav />
      <Hero />
      <About />
      <Topics />
      <Contact />
    </div>
  );
}

export default App;