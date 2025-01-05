import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/Navber'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard'
import Contect from '../src/components/Contect'

function App() {
 

  return (
    <>
    {/* Navbar */}
     <Navber></Navber>

     {/* Home section */}
    <Home></Home>

    <AboutMe></AboutMe>
    <Skills></Skills>
     <ProjectCard></ProjectCard>
     <Contect></Contect>
      
     
    </>
  )
}

export default App
