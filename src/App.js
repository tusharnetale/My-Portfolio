import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // Import Footer
import Languages from './components/Languages';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Languages />
        <Projects />
        <Contact />
      </main>
      <Footer /> {/* Include Footer */}
    </div>
  );
}

export default App;
