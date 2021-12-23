import './App.css';
import { AboutMe } from './sections/AboutMe/AboutMe';
import { Header } from './sections/Header/Header';
import { Projects } from './sections/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;