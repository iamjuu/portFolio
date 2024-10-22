import { BrowserRouter } from 'react-router-dom'
import {About,Experience,Feedbacks,Hero,Navbar,Tech,Works, StarsCanvas} from './components'
import {SignupFormDemo} from "../src/components/Signup"
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
   <Navbar/>
   <Hero/> 
      </div>
      <About/> 
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className='relative z-0  bg-transparent'>
        <SignupFormDemo/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
