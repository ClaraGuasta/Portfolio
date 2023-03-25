import './assets/css/app.css';
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div>
     <Header />
     <div>
     <Home />
     <div  className='appContainer'>
     <About />
     <Experience/>
     <Skills />
     <Portfolio />
     <Contact />
     </div>
     </div>
     <Footer />
    </div>
  );
}

export default App;
