import { BrowserRouter } from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className='relative z-0 flex flex-col bg-primary'>
<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
   <Navbar/>
   <Hero/> 
      </div>

      <div className='w-full bg-red-500'>
      <About/> 
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>
      </div>
      <div className='relative z-0'>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
