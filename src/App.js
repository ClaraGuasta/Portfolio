import './assets/css/app.css';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-contenedor' >
     <Header />
     <div>
     <Home />
     <About />
     <Skills />
     <Portfolio />
     <Contact />
     </div>
     <Footer />
    </div>
  );
}

export default App;
