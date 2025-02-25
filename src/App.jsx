import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectList from './components/ProjectList';

function App() {

  return (
    <div className = "App">
      {/* Multiple components are included in this App
      that each component has each own section */}
      <Header/>
      <About/>
      <ProjectList/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
