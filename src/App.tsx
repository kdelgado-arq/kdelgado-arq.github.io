import './App.css'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Karen Delgado</h1>
        <p>
          Portafolio 2025
        </p>
      </header>
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  )
}

export default App