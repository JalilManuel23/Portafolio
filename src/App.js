import { useEffect } from 'react'; 
import './App.css';
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './sections/Footer/Footer';
import { Header } from './sections/Header/Header';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';

function App() {

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;