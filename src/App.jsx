import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/Navber'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard'
import Contect from '../src/components/Contect'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    {/* Navbar */}
    <div className='w-11/12 mx-auto'>
    <Navber></Navber>
    </div>

     {/* Home section */}
    <Home></Home>

    <AboutMe></AboutMe>
    <Skills></Skills>
     <ProjectCard></ProjectCard>
     <Contect></Contect>
     <Footer></Footer>
      
     
    </>
  )
}

export default App
