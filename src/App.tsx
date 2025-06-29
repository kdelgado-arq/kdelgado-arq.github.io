import './App.css'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1></h1>
        <p></p>
      </header>
      <AboutMe />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  )
}

export default App