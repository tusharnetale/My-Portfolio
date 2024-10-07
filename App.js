import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Languages from './src/components/Languages';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Languages/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
